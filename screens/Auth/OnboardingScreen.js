import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { useNavigation } from "@react-navigation/native";
import { THEME } from "../../theme/ThemeContext"; // your theme file
import { COLORS } from "../../theme/theme";

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const slides = [
    {
      key: "slide1",
      title: "Welcome to VillageConnect",
      text: "Connecting people in your community for support and help.",
      image: require("../../images/community.webp"),
    },
    {
      key: "slide2",
      title: "Blood Donation",
      text: "Easily find and connect with donors in emergencies.",
      image: require("../../images/blooddonantion.webp"),
    },
    {
      key: "slide3",
      title: "Stay Connected",
      text: "Join community chats and never feel alone in a crisis.",
      image: require("../../images/connected.webp"),
    },
  ];

  return (
    <Swiper loop={false} activeDotColor={COLORS.primary} dotColor="#ccc">
      {slides.map((slide) => (
        <View key={slide.key} style={styles.slide}>
          <Image
            source={slide.image}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.text}>{slide.text}</Text>

          {/* Skip / Next buttons */}
          {slide.key === "slide3" ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.backgroundLight,
  },
  image: {
    width: "80%",
    height: 250,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: COLORS.cardDark,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
