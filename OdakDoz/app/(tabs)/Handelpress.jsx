import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-circular-progress';

const AnimatedCircularProgress = Progress.AnimatedCircularProgress;

export default function TimerCircleButton() {
  const [fill, setFill] = useState(50);

  const handlePress = () => {
    // example: increase progress by 10%
    setFill(prev => (prev + 10 > 100 ? 0 : prev + 10));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <AnimatedCircularProgress
          size={150}
          width={15}
          fill={fill}
          tintColor="#10B981"
          backgroundColor="#ccc"
        />
        <View style={styles.centerText}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{Math.round(fill)}%</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
