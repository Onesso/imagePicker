import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.CircleButtonContaniner}>
      <Pressable style={styles.CircleButton}>
        <MaterialIcons name="add" size={38} color="#25292e" onPress={onPress} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CircleButtonContaniner: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    padding: 3,
    borderRadius: 42,
    color: "#ffd33d",
  },
  CircleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
