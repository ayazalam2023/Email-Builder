
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "", image: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/getEmailLayout").then((response) => {
      setHtmlContent(response.data.html);
    });
  }, []);

  const handleTextChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    axios.post("http://localhost:5000/uploadEmailConfig", formData)
      .then(() => alert("Template saved successfully!"))
      .catch((err) => console.error("Error saving template:", err));
  };

  return (
    <div>
      <h1>Edit Email Template</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleTextChange("title", e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <ReactQuill
          value={formData.content}
          onChange={(value) => handleTextChange("content", value)}
        />
      </div>
      <button onClick={handleSave}>Save Template</button>
    </div>
  );
};

export default Editor;
    