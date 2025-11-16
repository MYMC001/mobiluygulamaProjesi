import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'

const logo_image = require('../../assets/images/logo_odak.png')

const SignUp = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
  <View  style={styles.header}>

           <Text style={styles.odak}>Odak</Text>
      <Text style={styles.doz}>Doz</Text>
        </View>

       <View style={styles.form}>

        <TextInput placeholder='User name' style={styles.input} />
        <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={{ textAlign: "center", padding: 7, color: "white" }}>Register</Text>
        </TouchableOpacity>

      </View>

       <View style={styles.bt_info}>
        <Text style={{ fontSize: 13 }}>
          Already have an account?  
        </Text>

         <TouchableOpacity onPress={() => router.push('/Login')}>
          <Text style={{ color: "#ff1616", fontWeight: "bold" }}>Login</Text>
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
    backgroundColor: "#FF1616",
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
});
