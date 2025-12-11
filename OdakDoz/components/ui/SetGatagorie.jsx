import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const categories = [
  { name: "Coding", icon: "laptop-code" },
  { name: "Study", icon: "book-open" },
  { name: "Read Book", icon: "book" },
  { name: "Sport", icon: "running" },
];

const SetCategorie = ({SetVisible ,isVisible }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    SetVisible(false);
  };

  return (
    <View style={styles.container}>
   

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => SetVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select a Category</Text>

            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => handleSelect(category)}
              >
                <FontAwesome5
                  name={category.icon}
                  size={20}
                  color="#2196F3"
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => SetVisible(false)}
            >
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16 },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  categoryButton: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  categoryText: { fontSize: 16 },
  closeButton: { marginTop: 15, padding: 10 },
  closeText: { color: "red", fontSize: 16 },
});

export default React.memo(SetCategorie);
