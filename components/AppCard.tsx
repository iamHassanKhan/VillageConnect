import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface AppCardProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: boolean;
  shadow?: boolean;
  borderRadius?: number;
}

const AppCard: React.FC<AppCardProps> = ({
  children,
  style,
  padding = true,
  shadow = true,
  borderRadius = 12,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderRadius },
        padding && styles.padding,
        shadow && styles.shadow,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
  padding: {
    padding: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default AppCard;
