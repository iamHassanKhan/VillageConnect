import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { COLORS } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

export default function AppHeader({
  title,
  image,
  titleStyle,
  onPress,
  onPress2,
  iconLeft,
  iconLeftColor,
  iconLeftSIze,
  iconRight,
  iconRightColor,
  iconRightSize,
  avatarPress,
  welcomeMessage,
  userName,
}) {
  return (
    <View style={styles.headerContainer}>
      {image && (
        <TouchableOpacity onPress={avatarPress}>
          <Image
            source={image}
            resizeMode="contain"
            style={styles.avatarStyle}
          />
        </TouchableOpacity>
      )}
      {userName && welcomeMessage && (
        <View style={styles.userContainer}>
          <Text style={styles.userWelcome}>{welcomeMessage}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      )}
      {iconLeft && (
        <TouchableOpacity style={styles.headerButton} onPress={onPress}>
          <Ionicons name={iconLeft} color={iconLeftColor} size={iconLeftSIze} />
        </TouchableOpacity>
      )}
      {title && <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>}
      {iconRight && (
        <TouchableOpacity style={styles.headerButton} onPress={onPress2}>
          <Ionicons
            name={iconRight}
            color={iconRightColor}
            size={iconRightSize}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  headerButton: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 40,
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.cardDark,
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 0.5,
  },
  userContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeMessage: {
    fontSize: 15,
    fontWeight: "500",
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
});
