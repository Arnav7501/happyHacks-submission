// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const RacialResources = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("financialResources");
        }}
      >
        <Text style={styles.text}>View Financial Resources</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Find Support Near Me</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Learn the history of the issue</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("chatApp");
        }}
      >
        <Text style={styles.text}>Online Community</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    top: "-10%",
    width: 300,

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: "25%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default RacialResources;
