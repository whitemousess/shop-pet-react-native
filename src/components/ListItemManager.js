import React from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function ListItemManager({ data, onLoadData, navigation }) {
  const onDelete = async () => {
    await axios
      .delete(`http://192.168.1.5:1407/api/pet/${data._id}/delete`, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ3NDg4ZDFlYjBiMjEyNzFiZGRjOGIiLCJpYXQiOjE2OTE4Mzg1MTN9.unlTWuKAln8iLccIvWvuJ-Ddjk0qHS5_SjwWlKSXXPQ",
        },
      })
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
          onPress={onDelete}
          style={[styles.actionButton, { backgroundColor: "red" }]}
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
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

  openButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});

export default ListItemManager;
