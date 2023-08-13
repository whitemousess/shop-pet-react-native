import React from "react";
import { Text, TouchableOpacity } from "react-native";

function ButtonCustom({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fcb000",
        padding: 20,
        borderRadius: 30,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#000",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonCustom;
