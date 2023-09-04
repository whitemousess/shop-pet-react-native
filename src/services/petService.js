import * as httpRequest from "~/utils/httprequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPet = async ({ page, perPage, type }) => {
  try {
    const res = await httpRequest.get("pet/show", {
      params: {
        page,
        per_page: perPage,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePet = async ({ deleteID }) => {
  try {
    const Token = await AsyncStorage.getItem("token");
    const res = await httpRequest.deleteData(`pet/${deleteID}/delete`, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + Token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
