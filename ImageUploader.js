
import React from "react";
import axios from "axios";

const ImageUploader = ({ onUpload }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    axios.post("http://localhost:5000/uploadImage", formData)
      .then((response) => {
        onUpload(response.data.imageUrl);
      })
      .catch((err) => console.error("Error uploading image:", err));
  };

  return (
    <div>
      <label>Upload Image:</label>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUploader;
    