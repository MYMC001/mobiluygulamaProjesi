import React, { useState, useEffect } from 'react';
import { View  ,StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import Clock from '@/components/ui/Clock'
import Catagories from '../../components/ui/Catagorie'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Timer() {
const categoryData = [
 
];
 
  return (
    <SafeAreaView style={ styles.container}>
      

       
        <Clock/>
      
    </SafeAreaView>
  );
}



const styles=StyleSheet.create({


  container:{
      flex:1,
      marginTop:20,
      alignItems:"center",
       justifyContent: "space-between",
      gap:20
  },




})