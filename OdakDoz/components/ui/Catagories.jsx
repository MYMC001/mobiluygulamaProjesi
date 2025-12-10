import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity ,Button } from "react-native";

const Catagorie = ({IsVisible ,onclose}) => {

   return (
    <View >
      <Modal
        animationType="slide"
        transparent={ false}
        visible={IsVisible}
        onRequestClose={() => {
          console.log("Closed");
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.title}>uqufdhuwhfueh</Text>

            <TouchableOpacity onPress={() => {onclose(prev=>!prev)}}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: 250,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  closeBtn: {
    marginTop: 15,
    fontSize: 16,
    color: "blue",
  },
});

export default React.memo(Catagorie);
