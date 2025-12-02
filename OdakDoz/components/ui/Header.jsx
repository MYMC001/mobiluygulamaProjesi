import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const Header = () => {
  return (
    <BlurView intensity={100} tint="light" style={styles.header}>
      <View style={styles.navbar}>
        
 
         <TouchableHighlight
          underlayColor="rgba(255,215,0,0.15)"
          onPress={() => console.log("Coins pressed")}
          style={styles.coinsWrapper}
        >
          <View style={styles.coinsContainer}>

            <View style={styles.coinNumberBadge}>
                <View style={styles.sign}>
                                    <Text  style={{color:"gold"}}>$</Text>
                </View>

            <Text style={styles.coinText}>23</Text>
            </View>
          </View>
        </TouchableHighlight>
         <TouchableOpacity  style={styles.sidebar}  onPress={()=>console.log("the bar")}>
                 <FontAwesome5 name="trophy" size={26}  />

      </TouchableOpacity>

      <TouchableOpacity  style={styles.sidebar}  onPress={()=>console.log("the bar")}>
                 <FontAwesome5 name="bars" size={26}  />

      </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    marginBottom: 25,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

   coinsWrapper: {
    borderRadius: 30,
    padding: 4,
  },

   coinsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

   coinNumberBadge: {
    flexDirection:"row",
    width:80,

    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",

     shadowColor: "#FFD700",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },

  coinText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#B8860B",
  },
  sign:{
      width:25,
      height:25,
      alignItems:"center",
      justifyContent:"center",
    borderRadius:20,
    borderWidth:2,
     borderColor:"gold"

  }
});

export default React.memo(Header);
