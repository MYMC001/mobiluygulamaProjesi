import React, { useState, useEffect } from 'react';
import { View  ,StyleSheet  } from 'react-native';
 import Clock from '@/components/ui/Clock'
import Color from '@/components/ui/Colors'
import Catagories from '../../components/ui/Catagorie'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import  Header  from '@/components/ui/Header';
  
export default function Timer() {
const [themecolor ,setThemeColor]=useState()
 
  return (
    <SafeAreaView style={[styles.container ,{backgroundColor:themecolor}]}>
      <StatusBar style="light" backgroundColor="black" />

                 <Header/>
                  <Clock themecolor={themecolor}/>
                  <Color onSelectColor={setThemeColor}/>

               
    </SafeAreaView>
  );
}



const styles=StyleSheet.create({


  container:{
      flex:1,
       alignItems:"center",
       justifyContent: "space-around",
       gap:10,
   },




})