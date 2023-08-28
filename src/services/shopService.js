import * as httpRequest from "~/utils/httprequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProduct = async () => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    const res = await httpRequest.get("shop/get-to-card", {
      headers: {
        authorization: "Bearer " + storedToken,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addProduct = async ({ shopData }) => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    const res = await httpRequest.post("shop/add-to-card", shopData, {
      headers: {
        authorization: "Bearer " + storedToken,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async ({ id }) => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    const res = await httpRequest.deleteData(`shop/delete-to-card/${id}`, {
      headers: {
        authorization: "Bearer " + storedToken,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
