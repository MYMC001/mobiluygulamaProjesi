import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SetTime = ({settime ,SetIsVisible ,IsVisible ,themecolor ,setitThetime ,isSetTime}) => {
  const [time, setTime] = useState(0)

  const increment = () => setTime(prev => prev + 5);
  const decrement = () => setTime(prev => (prev > 0 ? prev - 5 : 0));

  const confirmTime = () => {
    settime(time);
    setitThetime(false);
    }


  const HandelThecatagory=()=>{
   
        SetIsVisible(true)
   
  }

  return (
    <View style={styles.container}>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSetTime}
      >
        <View style={styles.modalBackground}>
          <View style={styles.settime}>
            <View style={styles.sideView} />

            <View style={styles.extraction}>
              <TouchableOpacity onPress={decrement}>
                <FontAwesome5 name="minus" color="red" size={33} />
              </TouchableOpacity>

              <TextInput
                value={time.toString()}
                onChangeText={text => setTime(Number(text) || 0)}
                style={styles.settimeinput}
                keyboardType="numeric"
              />

              <TouchableOpacity onPress={increment}>
                <FontAwesome5 name="plus" color="green" size={33} />
              </TouchableOpacity>
            </View>
               <TouchableOpacity
        style={[styles.confirmButton ,{backgroundColor:themecolor}]}
        onPress={() => confirmTime()}
      >
                <Text style={styles.text}>Confirm</Text>

        <FontAwesome5 name="check" size={26} color='green' />
      </TouchableOpacity>
          </View>
          
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => HandelThecatagory()}
      >
        <FontAwesome5 name="th-large" size={40} color={'white'} />
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
     borderRadius: 8,
    position: "absolute",
    right: -140,
    
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 59,
  },
  settime: {
    backgroundColor: "white",
    width: "80%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "35%",
    borderRadius: 10,
    gap: 22,
  },
  settimeinput: {
    height: 40,
    width: "20%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
  },
  sideView: {
    width: 50,
    height: 50,
    position: "absolute",
    transform: [{ rotate: "45deg" }],
    backgroundColor: "white",
    top: -22,
  },
  extraction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
  },

  confirmButton:{

    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:120,
  }
});

export default React.memo(SetTime);
