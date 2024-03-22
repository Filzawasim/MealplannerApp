/* eslint-disable prettier/prettier */
import React,{ useState,useContext} from 'react';
import axios from "axios";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,

  View,
  StyleSheet,
} from 'react-native';


// const login= async(email, password)=>{
// try {
//   const {data} =  await client.post(
//     '/sign-in',
//     {
//       email,
//       password,
//     },
//     {
//         headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json",
//         }  
//     }   
//  );
// console.log(data);  
//   if (data.success) {
//     alert("7chineh")
//   }else{
//     alert(data.message)
//   }

//   console.log(res.data);
// } catch (e) {
//   console.log(e);
 
// }
// }

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

//   const { setIsLoggedIn, setProfile } = useLogin();
// const [userInfo, setUserInfo] = useState({
//   email: '',
//   password: '',
// });

// const [error, setError] = useState('');

// const { email, password } = userInfo;

// const handleOnChangeText = (value, fieldName) => {
//   setUserInfo({ ...userInfo, [fieldName]: value });
// };

// const isValidForm = () => {
//   if (!isValidObjField(userInfo))
//     return updateError('Required all fields!', setError);

//   if (!isValidEmail(email)) return updateError('Invalid email!', setError);

//   if (!password.trim() || password.length < 8)
//     return updateError('Password is too short!', setError);

//   return true;
// };

// const submitForm = async () => {
//   if (isValidForm()) {
//     try {
//       const res = await client.post('/sign-in', { ...userInfo });

//       if (res.data.success) {
//         setUserInfo({ email: '', password: '' });
//         setProfile(res.data.user);
//         setIsLoggedIn(true);
//       }

//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
  

  return (
    <View style={[styles.container,styles.backgroundcolor]}>
      
     
      <Image source={require("../assets/logo.png")}  style={{objectFit:'contain',width: 200, height:200,marginBottom:10}}/>
      <View style={styles.wrapper}>
      {/* {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null} */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          label='Email'
          placeholder='example@email.com'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          label='Password'
          placeholder='********'
          autoCapitalize='none'
          secureTextEntry
        />

        <Button
        color={"#73b92a"}
          title="Login"
          onPress={async() => {
            const response = await axios.post('http://192.168.100.4:4000/signin',{
             
               "email": email,
                "password": password

            });
            if  (response.data["success"] == true){
                
                navigation.navigate("Home")
                
            }
            else {
              Alert.alert("Either email or password is wrong")

            }

            // register(name,email,password,Confpassword, navigation);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
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
  backgroundcolor: {
    backgroundColor: 'white',
  },
  wrapper: {
    width: '80%',
  
  },
 
  input: {
    marginBottom: 12,
    padding:5,
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
    color: "#73b92a"
  }
});

export default LoginScreen;