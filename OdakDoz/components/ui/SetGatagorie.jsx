import React, { use, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const defaultCategories = [
  { name: "Coding", icon: "laptop-code" },
  { name: "Study", icon: "book-open" },
  { name: "Read", icon: "book" },
  { name: "Sport", icon: "running" },
];

const SetCategorie = ({ SetVisible, isVisible, SetIsSettime  ,themecolor ,setCatagorie ,SetCatid}) => {
  const [categories, setCategories] = useState(defaultCategories);
  const [newCategory, setNewCategory] = useState("");
  const [data ,SetDatat]=useState([]);


  const HandelTheCatagorie=async()=>{


    const response=await(fetch('http://10.0.2.2:8000/CatagorieView',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:newCategory
      })
    }))

    const data=await response.json()
    if (response.ok){
      Alert.alert('Success','Category added successfully')

    }
    else {
      Alert.alert(data.error+'Failed to add category')
    }
  }

  const handleSelect = (category ,name ,id) => {
    SetVisible(false);
    SetIsSettime(true);
    ActiveCatagorie(category);
    setCatagorie(name);
    SetCatid(id);
  };





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



const ActiveCatagorie=async(id)=>{
  const response=await(fetch('http://10.0.2.2:8000/ActiveCategorie/'+id,{

    method:'GET',
    headers:{
      'Content-Type':'application/json'
    },
 
  }))


  if (response.ok){
    Alert.alert('Category activated successfully');
  }


  else {
    Alert.alert('Failed to activate category');
  }
}

useEffect(()=>{
  GetCatagories()
},[data])

  

  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={styles.modalBackground}>
        <BlurView style={styles.modalContainer}>

          <View style={styles.grid}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.card ]}
                onPress={() => handleSelect(item.id ,item.name ,item.id)}
              >
                <FontAwesome5
                  name={'code'}
                  size={22}
                  color={themecolor}
                />
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

           <View style={styles.addRow}>
            <TextInput
              placeholder="Add category"
              value={newCategory}
              onChangeText={setNewCategory}
              style={styles.input}
            />
            <TouchableOpacity style={[styles.addBtn ,{backgroundColor:themecolor}]} onPress={HandelTheCatagorie}>
              <FontAwesome5 name="plus" color="#fff" size={16} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.cancel}
            onPress={() => SetVisible(false)}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "88%",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    height: 70,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color:"white"
  },
  addRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 12,
  },
  addBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#4F46E5",
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    marginTop: 15,
    alignItems: "center",
  },
  cancelText: {
    color: "red",
    fontWeight: "600",
  },
});

export default React.memo(SetCategorie);
