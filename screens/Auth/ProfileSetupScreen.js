import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import AppScreenUI from "../../components/AppScreenUI";
import AppButton from "../../components/AppButton";
import AppDivider from "../../components/AppDivider";
import AppText from "../../components/AppText";

import { COLORS } from "../../theme/theme";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileSetupScreen({ navigation }) {
  return (
    <AppScreenUI>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Ionicons name="exit-outline" color={COLORS.cardDark} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Setup your \nProfile`}</Text>
        </View>
        <View style={styles.formContainer}>
          <AppButton
            title="Get Started"
            style={styles.buttonStyles}
            variant="secondary"
            onPress={() => {
              navigation.navigate("MainTabs");
            }}
          />
        </View>
      </View>
    </AppScreenUI>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
  },
  headerButton: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 40,
    padding: 10,
  },
  titleContainer: {
    height: "20%",
  },
  title: {
    fontSize: 38,
    fontWeight: "500",
    color: COLORS.cardLight,
    padding: 30,
  },
  formContainer: {
    flex: 1,
    padding: 26,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.cardLight,
    justifyContent: "center",
  },
  buttonStyles: {
    borderRadius: 30,
  },
});
