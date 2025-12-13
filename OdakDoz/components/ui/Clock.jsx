import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from 'react-native-circular-progress';
import SetTime from "./SetTime";
import SetCategorie from "./SetGatagorie";
const AnimatedCircularProgress = Progress.AnimatedCircularProgress;


const Clock = ({themecolor}) => {


  const [isRunning ,SetRuning]=useState(false)
 
  const [seconds ,setSeconds ]=useState(0)
  const [IsVisible ,SetIsVisible]=useState(false)
  const [isSettime ,SetIsSettime]=useState(false)


  useEffect(()=>{

    const interval=setInterval(() => {

      if (!isRunning) return;

       setSeconds(prev=>{
               if(prev==0 )  return 0;

               else  return prev-1;
       })
      
    }, 100);

    return ()=>clearInterval(interval)
  },[isRunning])
  return (
    <BlurView style={styles.main}>
      <SetCategorie 
      SetVisible={SetIsVisible} 
      isVisible={IsVisible} 
      SetIsSettime={SetIsSettime}
      themecolor={themecolor}
      
      />
      
<SetTime 
settime={setSeconds}
 setitThetime={SetIsSettime} 
 IsVisible={IsVisible}
  SetIsVisible={SetIsVisible}  
  themecolor={themecolor} 
  isSetTime={isSettime}/>
     
       <View style={styles.clock}> 
                 <AnimatedCircularProgress
                 
          size={182}
          width={15}
          fill={seconds}                 
          tintColor={themecolor}      
          backgroundColor={'white'}
        >
          
        </AnimatedCircularProgress>
        
        <View  style={styles.timerNum}>
                  <Text   style={styles.time}>{seconds}</Text>
                  <Text   style={styles.time}>:</Text>
                  <Text   style={styles.time}>{seconds}</Text>
                  

        </View>

      </View>

 
 
 

<View style={styles.btns}>
    <TouchableOpacity
  
  onPress={() => SetRuning(prev => !prev)}

  style={styles.btn}
>
  <FontAwesome5
    name={'play'}
    size={50}
    color="#fff"
  />
</TouchableOpacity>
    <TouchableOpacity
  style={styles.btn}
  
  onPress={() => SetRuning(prev => !prev)}
>
  <FontAwesome5
    name={'pause'}
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
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflow: "hidden",
  },

  clock: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  timerNum: {
    width: 120,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  time: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },

  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginTop: 35,
  },

  btn: {
    width: 65,
    height: 65,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
});


export default React.memo(Clock);
