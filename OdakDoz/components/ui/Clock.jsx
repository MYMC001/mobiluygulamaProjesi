import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Clock = () => {
  return (
    <BlurView style={styles.main}>
       <View style={styles.clock}>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.label}><Text style={styles.time}>00</Text></View>
      </View>

       <View style={styles.btns}>
        <TouchableOpacity style={[styles.btn, styles.playBtn]}>
          <FontAwesome5 name="play" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.pauseBtn]}>
          <FontAwesome5 name="pause" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.resetBtn]}>
          <FontAwesome5 name="redo" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingVertical: 20,
  },

  clock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
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
    gap: 20,
  },

  btn: {
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  playBtn: {
    backgroundColor: "#10B981",
  },

  pauseBtn: {
    backgroundColor: "#F59E0B",
  },

  resetBtn: {
    backgroundColor: "#EF4444",
  },
});

export default React.memo(Clock);
