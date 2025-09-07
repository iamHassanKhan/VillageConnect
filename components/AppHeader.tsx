import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import { COLORS } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

interface IconConfig {
  name: keyof typeof Ionicons.glyphMap; // ensures valid Ionicons names
  onPress: () => void;
  color?: string;
  size?: number;
}

interface AppHeaderProps {
  title?: string;
  titleStyle?: TextStyle;
  image?: ImageSourcePropType;
  avatarPress?: () => void;
  welcomeMessage?: string;
  userName?: string;
  leftIcons?: IconConfig[];
  rightIcons?: IconConfig[];
  containerStyle?: ViewStyle;
}

export default function AppHeader({
  title,
  titleStyle,
  image,
  avatarPress,
  welcomeMessage,
  userName,
  leftIcons = [],
  rightIcons = [],
  containerStyle,
}: AppHeaderProps) {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      {/* Left icons */}
      <View style={styles.iconRow}>
        {leftIcons.map((icon, index) => (
          <TouchableOpacity
            key={`left-${index}`}
            style={styles.headerButton}
            onPress={icon.onPress}
          >
            <Ionicons
              name={icon.name}
              color={icon.color || COLORS.cardDark}
              size={icon.size || 24}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Avatar + welcome text */}
      {image && (
        <TouchableOpacity onPress={avatarPress}>
          <Image source={image} style={styles.avatarStyle} />
        </TouchableOpacity>
      )}
      {userName && welcomeMessage && (
        <View style={styles.userContainer}>
          <Text style={styles.userWelcome}>{welcomeMessage}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      )}

      {/* Title */}
      {title && <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>}

      {/* Right icons */}
      <View style={styles.iconRow}>
        {rightIcons.map((icon, index) => (
          <TouchableOpacity
            key={`right-${index}`}
            style={styles.headerButton}
            onPress={icon.onPress}
          >
            <Ionicons
              name={icon.name}
              color={icon.color || COLORS.cardDark}
              size={icon.size || 24}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerButton: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 40,
    padding: 8,
    marginHorizontal: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.cardDark,
    textAlign: "center",
  },
  avatarStyle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: "grey",
    borderWidth: 0.5,
    marginHorizontal: 8,
  },
  userContainer: {
    marginHorizontal: 8,
  },
  userWelcome: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.gray,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.cardDark,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
