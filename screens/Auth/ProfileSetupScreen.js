import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProfileSetupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Setup Screen</Text>
      <Button
        title="Enter App"
        onPress={() => navigation.replace("MainTabs")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
