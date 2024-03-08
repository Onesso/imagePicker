- implimentation of a button using <Pressable> with a <Text> all in 'react-native' ; for the button an if statement is used to check if the button is themed or not. For themed an icon and background color is established
- <Image> to display the image
- <FontAwesome> to customize the button.

- image-picker Library ( must be installed using npx expo install expo-image-picker)
- this will enable us to access the phones media library and be able to pick an image.
-av import all(*) as imagePicker from expo-image-picker, av used the launchImageLibraryAsync method to be able to access the media, the method takes an object with two property (allowsEditing: true , quality: 1 (one is for the best quality) it return a result which contains assests which later contains the uri of the image
- 
