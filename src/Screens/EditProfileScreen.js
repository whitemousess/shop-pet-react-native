import axios from "axios";
import React, { useCallback, useContext, useState } from "react";
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

import ButtonCustom from "~/components/ButtonCustom";
import UploadImage from "~/components/UploadImage";
import { AuthContext } from "~/context/AuthContext";

function EditProfileScreen({navigation}) {
  const { userInfo ,editAuth } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [edit, setEdit] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: "",
    rePass: "",
  });

  const handlePressOutside = () => {
    Keyboard.dismiss(); // Đóng bàn phím khi người dùng bấm ra ngoài
  };

  const handleText = (key, value) => {
    setEdit((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setEdit({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: "",
      rePass: "",
    });
    setImage(null);
    setRefreshing(false);
  }, []);

  const handleImageUpload = (imageUri) => {
    setImage(imageUri);
  };

  const handleSubmit = () => {
    editAuth(edit,image,navigation)
  };

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
          <Text style={styles.header}>Sửa thông tin</Text>

          <UploadImage onImageUpload={handleImageUpload} />

          <TextInput
            style={styles.input}
            placeholder="Họ ..."
            placeholderTextColor="#ccc"
            value={edit.firstName}
            onChangeText={(text) => handleText("firstName", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Tên ..."
            placeholderTextColor="#ccc"
            value={edit.lastName}
            onChangeText={(text) => handleText("lastName", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email ..."
            placeholderTextColor="#ccc"
            value={edit.email}
            onChangeText={(text) => handleText("email", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Mật khẩu ..."
            secureTextEntry={true}
            placeholderTextColor="#ccc"
            onChangeText={(text) => handleText("password", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu ..."
            secureTextEntry={true}
            placeholderTextColor="#ccc"
            onChangeText={(text) => handleText("rePass", text)}
          />

          <ButtonCustom label={"Thay đổi"} onPress={handleSubmit} />
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

export default EditProfileScreen;
