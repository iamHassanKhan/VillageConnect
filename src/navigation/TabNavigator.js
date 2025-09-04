import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import FeedScreen from "../../screens/Main/FeedScreen";
import CommunityScreen from "../../screens/Main/CommunityScreen";
import ChatScreen from "../../screens/Main/ChatScreen";
import SettingsScreen from "../../screens/Main/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Feed":
              iconName = "home-outline";
              break;
            case "Community":
              iconName = "people-outline";
              break;
            case "Chat":
              iconName = "chatbubble-outline";
              break;
            case "Settings":
              iconName = "settings-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#D32F2F",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
