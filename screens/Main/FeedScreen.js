import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("OnboardingScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
