import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { themeColors } from '@/constants/theme';
import { BlurView  } from 'expo-blur';
import { FontAwesome5 } from '@expo/vector-icons';

const Color = ({onSelectColor}) => {
 

    const selectthemeColor=(color)=>{

        onSelectColor(color)
    }

    return (

        <View>
        <BlurView style={[styles.thememain ]}>
            {themeColors.map((theme, index) => (
                <TouchableHighlight
                    key={index}
                    style={[styles.colorBox, { backgroundColor: theme.name }]}
                    onPress={() =>{ selectthemeColor(theme.name)}}
                  disabled={false}
                > 
            <FontAwesome5 name="lock" color="gray" size={29} />
                </TouchableHighlight>
            ))}
        </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    thememain: {
        width: '100%',
        height:300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:30,
        gap:20,
        marginBottom:30,
     },
    colorBox: {
        width: '50', 
        height:50,      
        aspectRatio: 1,       
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
     },
    colorText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
});


export default React.memo(Color);
