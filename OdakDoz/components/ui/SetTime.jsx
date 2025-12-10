import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SetTime = () => {
  const [isSetTime, SetIsSetTime] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSetTime}
        onRequestClose={() => SetIsSetTime(false)}
      >
        <View style={styles.modalBackground}>

            <View   style={[styles.settime]}>

          
            <View  style={styles.sideView}/>

            <TextInput 
             placeholder="ENTER THE TIME" style={[styles.settimeinput]}
              autoFocus={false}
             />


            </View>
         
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => SetIsSetTime(prev => !prev)}
      >
        <FontAwesome5 name="hourglass" size={26} />
        <Text style={styles.text}>Set Time</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    position: "absolute",
    right: 60,
    backgroundColor: "#2196F3",
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "#fff",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  settime:{

    backgroundColor:"white",
    width:"80%",
    height:100,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:100,
    right:10,

  },

  settimeinput:{
    height:50,
    width:"80%",
    borderWidth:1,
  },

    sideView:{  

        width:40 ,
        height:40,
        position:"absolute",
    }
 
});

export default React.memo(SetTime);
