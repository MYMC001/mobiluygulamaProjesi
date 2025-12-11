import { Colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const logo_image = require('../../assets/images/logo_odak.png')

const SignUp = () => {

  const [username ,Setusername]=useState('')
  const [email ,Setemail]=useState('')
  const [password ,Setpassword]=useState('')

  
  const handleSignUp=async()=>{


    const response=await  fetch('http://192.168.1.57:8000/SingUp',{

      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({username:username,email:email ,password:password})
    })


    if (response.ok){
      Alert.alert("Registred")
    }
    else Alert.alert("Something went wrong")
  }


  const router = useRouter();

  return (
    <View style={styles.container}>
  <View  style={styles.header}>

           <Text style={styles.odak}>Odak</Text>
      <Text style={styles.doz}>Doz</Text>
        </View>

       <View style={styles.form}>

        <TextInput placeholder='User name' style={styles.input} onChangeText={Setusername} />
        <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} onChangeText={Setemail} />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}


          onChangeText={Setpassword}
        />

        {/* <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        /> */}

        <TouchableOpacity style={styles.btn} onPress={()=>handleSignUp()}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>

      </View>

       <View style={styles.bt_info}>
        <Text style={styles.infoText}>
          Already have an account?  
        </Text>

         <TouchableOpacity onPress={() => router.push('/Login')}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"space-around",
    padding: 50,
    marginTop: 50
  },

  header: {
    width: 200,   
     borderRadius: 10,
     marginBottom: 30,
     alignItems:"center",
     flexDirection:"row"
  },


  logo: {
    width: 120,
    height: 120,
    alignItems: "center",
  },

  form: {
    gap: 20
  },

  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 300
  },

  btn: {
    backgroundColor: Colors.light.primary,
    height: 40,
    borderRadius: 20,
    justifyContent: "center"
  },

  bt_info: {
    padding: 20,
    width: 300,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
    odak: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FF1616',          
  },
  doz: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1C1C1C',          
    marginLeft: 5,             
  },
  btnText: {
    textAlign: 'center',
    padding: 7,
    color: '#ffffff',
    fontWeight: '600',
  },
  linkText: {
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 13,
  },
});
