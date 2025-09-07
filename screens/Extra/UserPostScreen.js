import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import AppScreenUI from "../../components/AppScreenUI";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING } from "../../theme/theme";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

export default function UserPostScreen({ navigation }) {
  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState([]);

  // Pick image/video
  const pickImageOrVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setMedia((prev) => [
        ...prev,
        { type: "media", uri: result.assets[0].uri },
      ]);
    }
  };

  // Pick document
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    });

    if (result.type === "success") {
      setMedia((prev) => [
        ...prev,
        { type: "document", name: result.name, uri: result.uri },
      ]);
    }
  };

  // Remove selected media
  const removeMedia = (index) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  // Render media preview
  const renderMediaItem = ({ item, index }) => {
    if (item.type === "media") {
      return (
        <View style={styles.mediaWrapper}>
          <Image source={{ uri: item.uri }} style={styles.mediaPreview} />
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeMedia(index)}
          >
            <Ionicons name="close-circle" size={20} color="red" />
          </TouchableOpacity>
        </View>
      );
    } else if (item.type === "document") {
      return (
        <View style={styles.documentWrapper}>
          <View style={styles.documentPreview}>
            <Ionicons
              name="document-text-outline"
              size={24}
              color={COLORS.primary}
            />
            <Text style={styles.documentName}>{item.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.removeButtonDoc}
            onPress={() => removeMedia(index)}
          >
            <Ionicons name="close-circle" size={20} color="red" />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <AppScreenUI>
      <ScrollView style={styles.container}>
        <AppHeader
          iconLeft="close"
          iconLeftSIze={28}
          onPress={() => navigation.goBack()}
          title="Create Post"
          iconRight="send-sharp"
          iconRightSize={28}
          onPress2={() => console.log("Post sent:", { postText, media })}
        />

        {/* User Info */}
        <View style={styles.userInfoContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.userName}>Hassan Khan</Text>
            <Text style={styles.userStatus}>Public</Text>
          </View>
        </View>

        {/* Post Input */}
        <View style={styles.postInputWrapper}>
          <TextInput
            value={postText}
            onChangeText={setPostText}
            placeholder="What's on your mind?"
            placeholderTextColor={COLORS.backgroundDark}
            multiline
            textAlignVertical="top"
            style={styles.postInput}
          />
        </View>

        {/* Selected Media */}
        {media.length > 0 && (
          <FlatList
            data={media}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderMediaItem}
            horizontal
            style={styles.mediaList}
            showsHorizontalScrollIndicator={false}
          />
        )}

        {/* Media Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={pickImageOrVideo}
          >
            <Ionicons name="image-outline" size={28} color={COLORS.primary} />
            <Text style={styles.actionText}>Photo/Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={pickDocument}>
            <Ionicons
              name="document-text-outline"
              size={28}
              color={COLORS.secondary}
            />
            <Text style={styles.actionText}>Document</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="happy-outline" size={28} color={COLORS.secondary} />
            <Text style={styles.actionText}>Feeling/Activity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppScreenUI>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.backgroundLight,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SPACING.md,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.sm,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.backgroundDark,
  },
  userStatus: {
    fontSize: 12,
    color: COLORS.gray,
  },
  postInputWrapper: {
    marginVertical: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: SPACING.sm,
    minHeight: 100,
  },
  postInput: {
    fontSize: 15,
    color: COLORS.backgroundDark,
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: SPACING.md,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    color: COLORS.backgroundDark,
    fontWeight: "500",
  },
  mediaList: {
    marginVertical: SPACING.sm,
  },
  mediaWrapper: {
    position: "relative",
    marginRight: SPACING.sm,
  },
  mediaPreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: -6,
    right: -6,
  },
  documentWrapper: {
    position: "relative",
    marginRight: SPACING.sm,
  },
  documentPreview: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  documentName: {
    marginLeft: 6,
    fontSize: 12,
    color: COLORS.backgroundDark,
  },
  removeButtonDoc: {
    position: "absolute",
    top: -6,
    right: -6,
  },
});
