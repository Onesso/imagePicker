import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import * as imagePicker from "expo-image-picker";
import { useState } from "react";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require("./assets/image/peter.jpg");

export default function App() {
  const [selectedImage, setselectedImage] = useState(null);

  const pickImageAsync = async () => {
    try {
      let result = await imagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setselectedImage(result.assets[0].uri);
      } else {
        alert("you did not select an image");
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      alert("An error occurred while picking an image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

        {/* this is a component */}
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        {/* this is a component */}
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this phototo" />
      </View>

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
});
