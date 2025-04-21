import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  //Append Image file to form data
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", //Set header for file upload
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading the image", error);
    throw error;
  }
};

export default uploadImage;
