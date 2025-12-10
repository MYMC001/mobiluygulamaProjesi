import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, TouchableOpacity ,Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Button } from '@react-navigation/elements';


const SetCatagorie=()=>{

    return (


      
       <View>
         <View       style={[styles.modal ,{display:"flex"}]}>
            <Text >Catagorie Modal</Text>
        </View>


        <Button title="Open Modal" onPress={() => {}} />
       </View>
   
    );


}


const styles = StyleSheet.create({

    modal:{

        position:"absolute",
    }

  
});


export default React.memo(SetCatagorie);