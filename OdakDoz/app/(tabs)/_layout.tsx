import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#2c3935ff',

        

        tabBarStyle:{

          backgroundColor:"white",
           borderTopWidth:2
           
        },

      
        tabBarLabelStyle:{
          fontSize:10,
          fontWeight:"bold",
          fontFamily:"Roboto"
        }
      }}

      
    >
         <Tabs.Screen
        name="Timer"
        options={{
          title: 'Zamanlayıcı',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clock" size={size} color={color} solid />
          ),
        }}
      />
         <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tachometer-alt" size={size} color={color} solid />
          ),
        }}
      />
  
     
    </Tabs>
  );
}
