import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View ,AppState } from "react-native";
import * as Progress from "react-native-circular-progress";

import SetTime from "./SetTime";
import SetCategorie from "./SetGatagorie";

const AnimatedCircularProgress = Progress.AnimatedCircularProgress;

const Clock = ({ themecolor }) => {

  const [isRunning, SetRuning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
  const sub = AppState.addEventListener("change", nextState => {
    appState.current = nextState;
  });

  return () => sub.remove();
}, []);

  const [IsVisible, SetIsVisible] = useState(false);
  const [isSettime, SetIsSettime] = useState(false);
  const [ActiveCatagorie, SetActiveCatagorie] = useState(true);
  const [cat_id, SetCatid] = useState(0);
  const [catagorie, SetCatagories] = useState();

   const startTimeRef = useRef(null);
  const totalSecondsRef = useRef(0);

   const startTimer = () => {
    if (minutes === 0 && seconds === 0) return;

    totalSecondsRef.current = minutes * 60 + seconds;
    startTimeRef.current = Date.now();
    SetRuning(true);
  };

   const pauseTimer = () => {
    if (!isRunning  ) return;

    const elapsed =
      Math.floor((Date.now() - startTimeRef.current) / 1000);

    const remaining = totalSecondsRef.current - elapsed;

    totalSecondsRef.current = Math.max(remaining, 0);
    startTimeRef.current = null;

    setMinutes(Math.floor(totalSecondsRef.current / 60));
    setSeconds(totalSecondsRef.current % 60);

    SetRuning(false);
  };

   useEffect(() => {
    if (!isRunning ) return;

    const interval = setInterval(() => {
      const elapsed =
        Math.floor((Date.now() - startTimeRef.current) / 1000);

      const remaining = totalSecondsRef.current - elapsed;

      if (remaining <= 0) {
        setMinutes(0);
        setSeconds(0);
        SetRuning(false);
        clearInterval(interval);
        return;
      }

      setMinutes(Math.floor(remaining / 60));
      setSeconds(remaining % 60);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <BlurView style={styles.main}>

      {/* CATEGORY ICON */}
      <TouchableOpacity style={styles.categoryContainer}>
        <View
          style={[
            styles.is_active,
            { backgroundColor: ActiveCatagorie ? "green" : "red" }
          ]}
        />
        <FontAwesome5
          name={catagorie ? catagorie : "question"}
          size={20}
          color={themecolor}
        />
      </TouchableOpacity>

      <SetCategorie
        SetVisible={SetIsVisible}
        isVisible={IsVisible}
        SetIsSettime={SetIsSettime}
        themecolor={themecolor}
        setCatagorie={SetCatagories}
        SetCatid={SetCatid}
      />

      <SetTime
        setitThetime={SetIsSettime}
        IsVisible={IsVisible}
        SetIsVisible={SetIsVisible}
        themecolor={themecolor}
        isSetTime={isSettime}
        cat_id={cat_id}
        setMinute={setMinutes}
        minutes={minutes}
      />

      {/* CLOCK */}
      <View style={styles.clock}>
        <AnimatedCircularProgress
          size={182}
          width={15}
          fill={(seconds / 60) * 100}
          tintColor={themecolor}
          backgroundColor={"white"}
        />
        <View style={styles.timerNum}>
          <Text style={styles.time}>
            {String(minutes).padStart(2, "0")}
          </Text>
          <Text style={styles.time}>:</Text>
          <Text style={styles.time}>
            {String(seconds).padStart(2, "0")}
          </Text>
        </View>
      </View>

      {/* CONTROLS */}
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn} onPress={startTimer}>
          <FontAwesome5 name="play" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={pauseTimer}>
          <FontAwesome5 name="pause" size={50} color="#fff" />
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
    alignItems: "center",
    justifyContent: "center",
  },
  timerNum: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  time: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
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
  },
  categoryContainer: {
    position: "absolute",
    left: 20,
    top: 15,
    width: 50,
    height: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  is_active: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: "absolute",
    top: 2,
    right: 2,
  },
});

export default React.memo(Clock);
