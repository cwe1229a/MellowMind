import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "DancingScript", fontSize: 60, color: "#FFFFFF" }}
      >
        Mellow Mind
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Soundboard")}>
        <Ionicons name='arrow-forward-circle' size={64} color='#4016b4' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF843D",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20
  }
});

export default HomeScreen;
