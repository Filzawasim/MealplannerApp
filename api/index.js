/* eslint-disable prettier/prettier */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
  .connect('mongodb+srv://filza:filza@cluster0.9yqbxrt.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDb', error);
  });

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

const Menu = require('./models/menu');
const User = require('./models/user');

app.post('/signin', async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (!user)
    {return res.json({
      success: false,
      message: 'user not found, with the given email!',
    });}

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    {return res.json({
      success: false,
      message: 'email / password does not match!',
    });}

  const userInfo = {
    fullname: user.fullname,
    email: user.email,
    avatar: user.avatar ? user.avatar : '',
  };

  res.json({ success: true, user: userInfo});
});

app.post('/register', async (req, res) => {
  const {fullname, email, password} = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser) {
    return res.json({
      success: false,
      message: 'This email is already in use, try sign-in',
    });
  }
  const user = await User({
    fullname,
    email,
    password,
  });
  await user.save();
  res.json({success: true, user});
});

app.post('/menu/addDish', async (req, res) => {
  try {
    const {date, name, type, mealtype} = req.body;

    let menuItem = await Menu.findOne({date});

    if (!menuItem) {
      menuItem = new Menu({date});
    }

    menuItem.items.push({name, type, mealtype});

    await menuItem.save();
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({message: 'Internal server error'});
  }
});

app.get('/menu/all', async (req, res) => {
  try {
    const allMenuData = await Menu.find({});

    if (!allMenuData || allMenuData.length == 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(allMenuData);
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
});

app.post('/copyItems', async (req, res) => {
  try {
    const {prevDate, nextDate} = req.body;

    const prevMenu = await Menu.findOne({date: prevDate});
    if (!prevMenu) {
      return res.status(500).json({message: 'Previous date not found'});
    }

    let nextMenu = await Menu.findOne({date: nextDate});
    if (!nextMenu) {
      nextMenu = new Menu({date: nextDate, items: prevMenu.items});
    } else {
      nextMenu.items = prevMenu.items;
    }

    await nextMenu.save();

    res.status(200).json({message: 'items copied'});
  } catch (error) {
    res.status(500).json({message: 'Internal server error'});
  }
});

app.delete('/deleteItems/:date', async (req, res) => {
  const dateToDelete = req.params.date;

  try {
    const deletedItem = await Menu.findOneAndDelete({date: dateToDelete});
    if (deletedItem) {
      res.status(200).json({message: 'Item deleted'});
    } else {
      res.status(404).json({message: 'error deleting the items'});
    }
  } catch (error) {
    res.status(500).json({message: 'Internal server error'});
  }
});
