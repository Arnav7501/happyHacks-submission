// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";

const Finance = ({ navigation }) => {
  return (
    <>
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://www.affordablecollegesonline.org/financial-aid-for-minorities/"
          )
        }
      >
        General Aid for Students
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://www.onlineschools.org/financial-aid/minority/"
          )
        }
      >
        College Aid
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://www.feedingamerica.org/hunger-in-america/black-communities"
          )
        }
      >
        Food Assistance
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://www.calhfa.ca.gov/community/buildingblackwealth.htm"
          )
        }
      >
        Home Loans
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://www.calhfa.ca.gov/community/buildingblackwealth.htm"
          )
        }
      >
        Tutoring
      </Text>
    </>
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
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "blue",
    paddingTop: "15%",
    alignSelf: "center",
  },
});

export default Finance;
