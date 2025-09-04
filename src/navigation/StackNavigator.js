import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import OnboardingScreen from "../../screens/Auth/OnboardingScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import ProfileSetupScreen from "../../screens/Auth/ProfileSetupScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth flow */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />

      {/* Main app flow */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}
