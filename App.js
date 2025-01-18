import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import Editor from "./components/Editor";

const App = () => {
  const [imageURL, setImageURL] = useState("");

  const handleImageUpload = (url) => {
    setImageURL(url); // Updates the image URL after successful upload
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Image Builder</h1>
      <ImageUploader onUpload={handleImageUpload} />
      <Editor imageURL={imageURL} />
    </div>
  );
};

export default App;
