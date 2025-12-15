import React ,{useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  PieChart,
  BarChart,
  Grid,
} from "react-native-svg-charts";

import Header from "@/components/ui/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { FontAwesome5 } from "@expo/vector-icons";


 


const weeklyData = [2, 3, 100, 1, 5, 2, 4];  




const Dashboard = () => {

  const [data,SetDatat]=React.useState([])
  const [LastSevenDaysData,SetLastSevenDays]=React.useState([])



  const  get_last_seven_days =async (name) => {


  const response=await(fetch('http://10.0.2.2:8000/last_7_days_timers/'+name,{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    },
  }))
  

  if (response.ok){
    const data=await response.json()
    SetLastSevenDays(data.last_7_days )
}

  else {
    Alert.alert('Failed to fetch last seven days data')
  }
  
    

}


const GetCatagories=async()=>{

  const response=await(fetch('http://10.0.2.2:8000/CatagorieView',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    },

  }))

 if (response.ok){
    const data=await response.json()
    SetDatat(data)
 }

 else Alert.alert(data.error+'Failed to fetch categories')

}
useEffect(()=>{
  GetCatagories()

  
},[])
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
     
       <BlurView style={styles.card}>
 
        <PieChart
          style={{ height: 180 }}
          data={data.map(item => ({
            key: item.id,
            value: item.usesNum,
            svg: { fill: item.color },
          }))}
          innerRadius={50}
          outerRadius={80}
        />

         {data.map(item => (
          <View key={item.key} style={styles.legendRow}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: item.color },
              ]}
            />
            <Text style={styles.legendText}>
              {item.name} — {item.usesNum} min
            </Text>
          </View>
        ))}
      </BlurView>

       <View style={styles.card}>

        <View   style={styles.Catagories}>


          
                    <TouchableOpacity  style={[styles.CatagoryCard ]} 
                    
                    
                      onPress={()=>get_last_seven_days('Project')}
                    >   
            
            <FontAwesome5 name="project-diagram" size={20} color={'#8B5CF6'} />         
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.CatagoryCard ]} 
          
            onPress={()=>get_last_seven_days('Coding')}
          >   
            <FontAwesome5 name="code" size={20} color={'#3B82F6'} />         
          </TouchableOpacity>
                    <TouchableOpacity  style={[styles.CatagoryCard ]} 
                    
                      onPress={()=>get_last_seven_days('Study')}
                    >   
        
            <FontAwesome5 name="book" size={20} color={'#F59E0B'} />         
          </TouchableOpacity>
                    <TouchableOpacity  style={[styles.CatagoryCard ]}
                    
                    
                      onPress={()=>get_last_seven_days('Reading')}
                    >   
         
            <FontAwesome5 name="book-open" size={20} color={'#10B981'} />         
          </TouchableOpacity>
        </View>

       <BarChart
  style={{ height: 180 }}
  data={LastSevenDaysData.map(item => item.total_minutes)}
  svg={{ fill: "#10B981" }}
  contentInset={{ top: 20, bottom: 20 }}
  spacingInner={0.4}
>
  <Grid direction={Grid.Direction.VERTICAL} />
</BarChart>

       <View style={styles.daysRow}>
  {LastSevenDaysData.map((ct, index) => (
    <Text key={index} style={styles.dayText}>
        {ct.total_minutes}
    </Text>
  ))}
</View>

      </View>
    </SafeAreaView>
  );
};

 
 
const styles = StyleSheet.create({
  container:{
      flex:1,
       alignItems:"center",
       justifyContent: "space-around",
       gap:10,
       backgroundColor:"#1c51baff"
   },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 16,
  },

  card: {
    width: "88%",
     borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
    color: "white",
  },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },

  legendText: {
    fontSize: 13,
    color: "white",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 4,
  },

  dayText: {
    fontSize: 12,
    color: "white",
  },

  Catagories:{
    width:"100%",
    height:50,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginBottom:10,
  }
  ,
  CatagoryCard:{
    width:60,
    height:40,
    borderRadius:10,
    backgroundColor:"#E5E7EB",
    justifyContent:"center",
    alignItems:"center",
  }
});


export default Dashboard