import * as httpRequest from "~/utils/httprequest";

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
    const res = await httpRequest.deleteData(`pet/${deleteID}/delete`, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ3NDg4ZDFlYjBiMjEyNzFiZGRjOGIiLCJpYXQiOjE2OTE4Mzg1MTN9.unlTWuKAln8iLccIvWvuJ-Ddjk0qHS5_SjwWlKSXXPQ",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
