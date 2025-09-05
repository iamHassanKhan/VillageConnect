import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import AppScreenUI from "../../components/AppScreenUI";
import { COLORS } from "../../theme/theme";
import AppHeader from "../../components/AppHeader";
import AppInput from "../../components/AppInput";

export default function FeedScreen({ navigation }) {
  return (
    <AppScreenUI>
      <AppHeader
        // iconLeft="exit-outline"
        // iconLeftSIze={25}
        // onPress={() => {
        //   navigation.navigate("Login");
        // }}
        // title="Community"
        iconRight="notifications-circle-outline"
        iconRightSize={30}
        onPress2={() => {
          console.log("Notification Clicked");
        }}
        image={require("../../images/community1.png")}
        avatarPress={() => navigation.navigate("Settings")}
        welcomeMessage={`Welcome`}
        userName={`Hassan Khan`}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          right: 10,
          width: 25,
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          borderRadius: 40,
          padding: 5,
        }}
      >
        <Text
          style={{ color: COLORS.cardLight, fontSize: 10, fontWeight: "800" }}
        >
          3
        </Text>
      </View>
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Post");
          }}
          style={styles.postContainer}
        >
          <Text>Post your Activity</Text>
        </TouchableOpacity>
      </>
    </AppScreenUI>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.cardLight,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 30,
  },
});
