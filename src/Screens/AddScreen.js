import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

// Picker
import { Picker } from "@react-native-picker/picker";

import ButtonCustom from "../components/ButtonCustom";
import UploadImage from "../components/UploadImage";

function AddScreen() {
  const [type, setType] = useState("");
  const [data, setData] = useState({ name: "", info: "" });
  const [image, setImage] = useState(null);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleText = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    console.log(data);
  };

  const handleImageUpload = (imageUri) => {
    setImage(imageUri);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Thêm thông tin</Text>

          <UploadImage onImageUpload={handleImageUpload} />

          <TextInput
            style={styles.input}
            value={data.name}
            onChangeText={(text) => handleText("name", text)}
            placeholder="Tên ..."
            placeholderTextColor="#ccc"
          />

          <TextInput
            style={styles.input}
            value={data.info}
            onChangeText={(text) => handleText("info", text)}
            placeholder="Thông tin ..."
            placeholderTextColor="#ccc"
          />

          <Picker
            selectedValue={type}
            onValueChange={(itemValue) => setType(itemValue)}
          >
            <Picker.Item label="Chọn vật nuôi" value="" />
            <Picker.Item label="Chó cảnh" value="dogs" />
            <Picker.Item label="Mèo cảnh" value="cats" />
          </Picker>
          <ButtonCustom label={"Thêm"} onPress={() => {}} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ScrollView>
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

export default AddScreen;
