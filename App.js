import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import * as imagePicker from "expo-image-picker";
import { useState } from "react";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";

const PlaceholderImage = require("./assets/image/peter.jpg");

export default function App() {
  const [selectedImage, setselectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // this function is used to open the media gallery and pick image to show it
  const pickImageAsync = async () => {
    try {
      let result = await imagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setselectedImage(result.assets[0].uri);
        console.log(result.assets[0].uri);
        setShowAppOptions(true);
      } else {
        alert("you did not select an image");
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      alert("An error occurred while picking an image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  //this function is for adding a sticker
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* this code is to display the image */}
      <View style={styles.imageContainer}>
        {/* this is a component */}
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              label="save"
              icon="save-alt"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          {/* this is a component */}
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <Text>itakuwa hapa</Text>
      </EmojiPicker>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
