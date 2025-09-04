import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Go to Profile Setup"
        onPress={() => navigation.navigate("ProfileSetup")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
