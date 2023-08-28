import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";

// Picker
import { Picker } from "@react-native-picker/picker";

import ButtonCustom from "~/components/ButtonCustom";
import UploadImage from "~/components/UploadImage";

function EditPetScreen({ route, navigation }) {
  const { data } = route.params;
  const [type, setType] = useState(data.type);
  const [editData, setEditData] = useState({
    name: data.name,
    description: data.description,
  });
  const [image, setImage] = useState(null);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleText = (key, value) => {
    setEditData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleImageUpload = (imageUri) => {
    setImage(imageUri);
  };

  const submit = async (e) => {
    const formData = new FormData();
    formData.append("name", editData.name);
    if (image) {
      formData.append("image", {
        uri: image,
        type: "image/jpeg",
        name: "image.jpg",
      });
    } else {
      formData.append("image", data.image); // Use data.image if no new image is selected
    }
    formData.append("type", type);
    formData.append("description", editData.description);

    await axios
      .put(`${process.env.REACT_NATIVE_BASE_URL}pet/${data._id}/edit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ3NDg4ZDFlYjBiMjEyNzFiZGRjOGIiLCJpYXQiOjE2OTE4Mzg1MTN9.unlTWuKAln8iLccIvWvuJ-Ddjk0qHS5_SjwWlKSXXPQ",
        },
      })
      .then((response) => {
        navigation.navigate("Manager");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Sửa thông tin</Text>

          <UploadImage onImageUpload={handleImageUpload} />

          <TextInput
            style={styles.input}
            value={editData.name}
            onChangeText={(text) => handleText("name", text)}
            placeholder="Tên ..."
            placeholderTextColor="#ccc"
          />

          <TextInput
            style={styles.input}
            value={editData.description}
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
          <ButtonCustom label={"Sửa"} onPress={submit} />
          <ButtonCustom
            label={"Hủy"}
            onPress={() => navigation.navigate("Manager")}
          />
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

export default EditPetScreen;
