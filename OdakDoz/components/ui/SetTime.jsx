import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SetTime = ({settime}) => {
  const [isSetTime, SetIsSetTime] = useState(false);
  const [time, setTime] = useState(0)

  const increment = () => setTime(prev => prev + 5);
  const decrement = () => setTime(prev => (prev > 0 ? prev - 5 : 0));

  const confirmTime = () => {
    settime(time);
    SetIsSetTime(false);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSetTime}
        onRequestClose={() => SetIsSetTime(false)}
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
        style={styles.confirmButton}
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
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    gap: 20,
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

    backgroundColor:"gray",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:120,
  }
});

export default React.memo(SetTime);
