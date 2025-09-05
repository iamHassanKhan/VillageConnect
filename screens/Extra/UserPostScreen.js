import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import AppScreenUI from "../../components/AppScreenUI";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/theme";
import AppInput from "../../components/AppInput";

export default function UserPostScreen({ navigation }) {
  return (
    <AppScreenUI>
      <ScrollView>
        <AppHeader
          iconLeft="arrow-back"
          iconLeftSIze={30}
          onPress={() => {
            navigation.navigate("MainTabs");
          }}
          title={`Post your Activity`}
          iconRight="send-sharp"
          iconRightSize={30}
          onPress2={() => {
            console.log("Post sent pressed..");
          }}
        />
        <View style={styles.postContainer}>
          <View style={styles.postInputContainer}>
            {/* <Text style={styles.postLable}>What is in your mind</Text> */}
            <AppInput
              placeholder="What is in your mind"
              placeholderTextColor={COLORS.backgroundDark}
              numberOfLines={10}
            />
            <TouchableOpacity
              onPress={() => {
                console.log("Select Media pressed");
              }}
            >
              <Ionicons name="document" size={40} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppScreenUI>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: 10,
  },
  postInputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  postLable: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.backgroundDark,
  },
});
