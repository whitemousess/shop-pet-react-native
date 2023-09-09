import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Vibration,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import * as petService from "~/services/petService";

function ListItemManager({ data, onLoadData, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    Vibration.vibrate();
  };

  const handleYesPress = () => {
    petService
      .deletePet({ deleteID: data._id })
      .then(onLoadData())
      .catch((error) => console.log(error));
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { data: data })}
          style={[styles.actionButton, { backgroundColor: "blue" }]}
        >
          <Ionicons name="pencil-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={[styles.actionButton, { backgroundColor: "red" }]}
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Bạn có chắc muốn xóa dữ liệu này?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleYesPress}
                style={styles.yesButton}
              >
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal} style={styles.noButton}>
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.text}>{data.name}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
    marginLeft: 10,
  },
  actionContainer: {
    flexDirection: "row",
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "90%",
    borderRadius: 10,
    marginLeft: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "70%",
  },
  yesButton: {
    backgroundColor: "#2ecc71",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  noButton: {
    backgroundColor: "#e74c3c",
    padding: 20,
    borderRadius: 5,
  },
});

export default ListItemManager;
