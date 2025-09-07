import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppScreenUI from "../../components/AppScreenUI";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import AppInput from "../../components/AppInput"; // 👈 create if not already
import { COLORS } from "../../theme/theme";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileSetupScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!photo) {
      Alert.alert("Profile Picture Required", "Please select a profile photo.");
      return;
    }
    if (!name.trim()) {
      Alert.alert("Name Required", "Please enter your name.");
      return;
    }

    // ✅ save profile info or pass to firebase/zustand
    navigation.navigate("MainTabs");
  };

  return (
    <AppScreenUI>
      <View style={styles.mainContainer}>
        {/* Header Exit */}
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

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Setup your \nProfile`}</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Avatar Picker */}
          <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.avatar} />
            ) : (
              <Ionicons
                name="camera-outline"
                size={40}
                color={COLORS.primary}
              />
            )}
          </TouchableOpacity>

          {/* Name Input */}
          <AppInput
            placeholder="Enter your name *"
            value={name}
            onChangeText={setName}
          />

          {/* Email Input (optional) */}
          <AppInput
            placeholder="Enter your email (optional)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Button */}
          <AppButton
            title="Get Started"
            style={styles.buttonStyles}
            variant="secondary"
            onPress={handleSubmit}
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
    height: "30%",
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
    gap: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: COLORS.cardLight,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  buttonStyles: {
    borderRadius: 30,
    marginTop: 20,
  },
});
