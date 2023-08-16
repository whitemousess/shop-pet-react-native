import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  SafeAreaView,
} from "react-native";

// Picker
import { Picker } from "@react-native-picker/picker";

import ButtonCustom from "../components/ButtonCustom";
import UploadImage from "../components/UploadImage";

function EditProfileScreen() {
  const [type, setType] = useState();

  const handlePressOutside = () => {
    Keyboard.dismiss(); // Đóng bàn phím khi người dùng bấm ra ngoài
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sửa thông tin</Text>

        <UploadImage />

        <TextInput style={styles.input} placeholder="Tên ..." placeholderTextColor="#ccc"/>

        <TextInput style={styles.input} placeholder="Thông tin ..." placeholderTextColor="#ccc"/>
        
        <ButtonCustom label={"Thêm"} onPress={() => {}} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 42,
    marginBottom: 20,
    paddingRight: 18,
    paddingLeft: 18,
    borderWidth: 1,
    borderColor: "#fcb000",
    borderRadius: 30,
  },
});

export default EditProfileScreen;