import React ,{useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  PieChart,
  BarChart,
  Grid,
} from "react-native-svg-charts";

 
const data = [
  { key: 1, label: "Coding", value: 80, color: "#3B82F6" },
  { key: 2, label: "Study", value: 40, color: "#10B981" },
  { key: 3, label: "Reading", value: 30, color: "#F59E0B" },
  { key: 4, label: "Sport", value: 20, color: "#EF4444" },
];

const weeklyData = [2, 3, 4, 1, 5, 2, 4];  


const Dashboard = () => {

  const [data,SetDatat]=React.useState([])

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Today overview</Text>

      {/* PIE CHART */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Focus by Category</Text>

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

        {/* LEGEND */}
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
      </View>

      {/* BAR GRAPH */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Focus (hours)</Text>

        <BarChart
          style={{ height: 180 }}
          data={weeklyData}
          svg={{ fill: "#1877F2" }}
          contentInset={{ top: 20, bottom: 20 }}
          spacingInner={0.4}
        >
          <Grid />
        </BarChart>

        <View style={styles.daysRow}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <Text key={index} style={styles.dayText}>
              {day}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

 
/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9FAFB",
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
    backgroundColor: "#fff",
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
    color: "#111827",
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
    color: "#374151",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 4,
  },

  dayText: {
    fontSize: 12,
    color: "#6B7280",
  },
});


export default Dashboard