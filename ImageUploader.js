import React from "react";
import axios from "axios";

const ImageUploader = ({ onUpload }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:5000/uploadImage", formData)
      .then((response) => {
        alert("Image uploaded successfully!");
        onUpload(response.data.imageUrl); // Passes the image URL to the parent component
      })
      .catch((err) => {
        console.error("Error uploading image:", err);
      });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="file">Upload an Image:</label>
      <input
        type="file"
        id="file"
        onChange={handleImageUpload}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default ImageUploader;
