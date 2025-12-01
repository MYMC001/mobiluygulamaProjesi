import React from "react";
import { View, Text, StyleSheet ,Platform } from "react-native";

const Clock = () => {
  return (
 
      <View  style={styles.clock}>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
      </View>
      
   );
};

const styles = StyleSheet.create({

    clock:{ 
     width:200,
    height:60,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:20,
    },
    
  label: {
    color: "black",
    fontWeight: "bold",
     borderBottomColor:"#10B981",
    borderBottomWidth:2
   },

   time:{
    fontSize:45,
      fontFamily: Platform.OS === 'ios' ? 'SF Mono' : 'monospace',
      color:"black",
      

   }
});

export default React.memo(Clock);
