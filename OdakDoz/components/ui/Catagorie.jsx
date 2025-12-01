import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Catagories = () => {
  return (
   <View>

    <View  style={{width:"100%" ,height:20 ,borderBottomWidth:2 ,borderBottomColor:"red"}}>


    </View>

     <View style={styles.cat_style}>

      <TouchableHighlight style={styles.box}>
        <Text style={styles.text}>1</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.box}>
        <Text style={styles.text}>2</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.box}>
        <Text style={styles.text}>3</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.box}>
        <Text style={styles.text}>4</Text> 
      </TouchableHighlight>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  cat_style: {

    width: "100%",
     borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",

     justifyContent: "space-between",
     marginBottom:0,

   },

  box: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default React.memo(Catagories);
