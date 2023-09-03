import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

function InputCustom({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        paddingBottom: 8,
        marginBottom: 8,
      }}
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, marginBottom: 30 }}
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor="#ccc"
          style={{
            flex: 1,
            paddingVertical: 0,
            marginBottom: 30,
            color: "#000",
          }}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputCustom;
