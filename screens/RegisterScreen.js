/* eslint-disable prettier/prettier */
import React, { useContext,useState} from 'react';
import axios from 'axios';
import {
  Button,
  Image,

  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';



const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null); 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [Confpassword, setConfPassword] = useState(null);
  
  return (
    <View style={[styles.container,styles.backgroundcolor]}>
         <Image source={require("../assets/logo.png")}  style={{objectFit:'contain',width: 200, height:200,marginBottom:10}}/>
    
     
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          value={Confpassword}
          placeholder="confirm password"
          onChangeText={text => setConfPassword(text)}
          secureTextEntry
        />

        <Button
          title="Register"
          color={"#73b92a"}
          onPress={async() => {
            const response = await axios.post('http://192.168.100.4:4000/register',{
                "fullname": name,
               "email": email,
                "password": password

            });
            if  (response.data["success"] == true){
                Alert.alert("Registration Successful");
                navigation.navigate("Login")
                
            }

            // register(name,email,password,Confpassword, navigation);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'

  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:40,
    fontFamily:'sans-serif-condensed'
  },
  backgroundcolor: {
    backgroundColor: 'white',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    padding:5,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
  },
  button:{
    marginLeft:10,
  }
});

export default RegisterScreen;