import * as httpRequest from "~/utils/httprequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    const res = await httpRequest.get("account/current", {
      headers: {
        authorization: "Bearer " + storedToken,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error );
  }
};
