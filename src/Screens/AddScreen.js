import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import axios from "axios";

// Picker
import { Picker } from "@react-native-picker/picker";

import ButtonCustom from "../components/ButtonCustom";
import UploadImage from "../components/UploadImage";

function AddScreen({ navigation }) {
  const [type, setType] = useState("");
  const [data, setData] = useState({ name: "", description: "" });
  const [image, setImage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

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

  const submit = async (e) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", {
      uri: image,
      type: "image/jpeg", // Change to the actual image type
      name: "image.jpg", // Change to the actual image file name
    });
    formData.append("type", type);
    formData.append("description", data.description);

    await axios
      .post("http://192.168.1.5:1407/api/pet/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ3NDg4ZDFlYjBiMjEyNzFiZGRjOGIiLCJpYXQiOjE2OTE4Mzg1MTN9.unlTWuKAln8iLccIvWvuJ-Ddjk0qHS5_SjwWlKSXXPQ",
        },
      })
      .then((response) => {
        navigation.navigate("DogTab");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setData("");
    setType("");
    setImage(null);
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
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
            value={data.description}
            onChangeText={(text) => handleText("description", text)}
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
          <ButtonCustom label={"Thêm"} onPress={submit} />
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
