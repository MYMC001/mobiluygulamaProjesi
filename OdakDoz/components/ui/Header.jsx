import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Header = ({ theme = "dark" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styles = useStyles(theme);

  return (
    <BlurView intensity={80} tint={theme} style={styles.header}>
      <View style={styles.navbar}>

         <TouchableOpacity
          activeOpacity={0.85}
          style={styles.coinBadge}
        >
          <View style={styles.coinIcon}>
            <Text style={styles.coinSign}>$</Text>
          </View>
          <Text style={styles.coinText}>23</Text>
        </TouchableOpacity>

         <View style={styles.rightGroup}>

          

         
           <TouchableOpacity
            activeOpacity={0.85}
            style={styles.avatarWrapper}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              style={styles.avatar}
            />
            <View style={styles.onlineDot} />
          </TouchableOpacity>

        </View>

      </View>
    </BlurView>
  );
};
const useStyles = (theme) => {
  const isDark = theme === "dark";

  return {
    header: {
      width: "100%",
      height: 64,
      justifyContent: "center",
      borderBottomWidth: 1,
      borderColor: "rgba(255,255,255,0.08)",
    },

    navbar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
    },

    coinBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255,215,0,0.12)",
      borderRadius: 16,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderWidth: 1,
      borderColor: "rgba(255,215,0,0.35)",
      gap: 8,
    },

    coinIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(255,215,0,0.25)",
      alignItems: "center",
      justifyContent: "center",
    },

    coinSign: {
      color: "#FFD700",
      fontWeight: "700",
      fontSize: 14,
    },

    coinText: {
      fontSize: 18,
      fontWeight: "700",
      color: "#FFD700",
    },

    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    avatarWrapper: {
      width: 42,
      height: 42,
      borderRadius: 14,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.2)",
    },

    avatar: {
      width: "100%",
      height: "100%",
    },

    onlineDot: {
      position: "absolute",
      bottom: 3,
      right: 3,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#22C55E",
      borderWidth: 2,
      borderColor: isDark ? "#000" : "#fff",
    },

    menuBtn: {
      width: 42,
      height: 42,
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.1)",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.15)",
    },
  };
};

export default React.memo(Header);
