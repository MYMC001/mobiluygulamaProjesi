import React, { useState, useEffect } from 'react';
import { View  ,StyleSheet } from 'react-native';
 import Clock from '@/components/ui/Clock'
import Color from '@/components/ui/Colors'
import Catagories from '../../components/ui/Catagorie'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Timer() {
const [themecolor ,setThemeColor]=useState()
 
  return (
    <SafeAreaView style={[styles.container ,{backgroundColor:themecolor}]}>
      


                  <Clock/>
                  <Color onSelectColor={setThemeColor}/>

               
    </SafeAreaView>
  );
}



const styles=StyleSheet.create({


  container:{
      flex:1,
       alignItems:"center",
       justifyContent: "center",
      gap:40 ,
      backgroundColor:"red"
  },




})