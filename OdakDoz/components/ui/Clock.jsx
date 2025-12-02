import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity  ,Modal ,StatusBar} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import * as Progress from 'react-native-circular-progress';
const AnimatedCircularProgress = Progress.AnimatedCircularProgress;


const Clock = ({themecolor}) => {


  const [isRunning ,SetRuning]=useState(false)
 
  const [seconds ,setSeconds ]=useState(0)


  useEffect(()=>{

    const interval=setInterval(() => {

      if (!isRunning) return;

       setSeconds(prev=>{
               if(prev<0 || prev>100)  return 0;

               else  return prev+1;
       })
      
    }, 100);

    return ()=>clearInterval(interval)
  },[isRunning])
  return (
    <BlurView style={styles.main}>
      <StatusBar></StatusBar>
 
       <View style={styles.clock}>
                 <AnimatedCircularProgress
                 
          size={180}
          width={15}
          fill={seconds}                 
          tintColor={themecolor}      
          backgroundColor={'white'}
        >
          
        </AnimatedCircularProgress>
        <View  style={{flexDirection:"row" ,marginTop:10}}>
                  <Text   style={styles.time}>{seconds}</Text>
                  <Text   style={styles.time}>:</Text>
                  <Text   style={styles.time}>{seconds}</Text>
                  

        </View>

      </View>

 
 
 

<View style={styles.btns}>
    <TouchableOpacity
  
  onPress={() => SetRuning(prev => !prev)}
>
  <FontAwesome5
    name={isRunning ? "pause" : "play"}
    size={50}
    color="#fff"
  />
</TouchableOpacity>
</View>
       

  
     </BlurView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "88%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
   },

  clock: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  
  },

  label: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  time: {
    fontSize: 45,
    fontFamily: Platform.OS === "ios" ? "SF Mono" : "monospace",
    color: "#111827",
    fontWeight: "bold",
  },

  colon: {
    fontSize: 45,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "#111827",
  },

  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    position:"absolute",
    height:200,
    top:80,

    gap: 20,
    borderRadius:10, 
  },

  btn: {
     borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

 time:{

    fontSize:23,
    color:"white",
    fontWeight:"800"
  
 }
 
});

export default React.memo(Clock);
