import React, { useState } from "react";

const Editor = ({ imageURL }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    const templateData = {
      title,
      content,
      image: imageURL,
    };

    // Logs template data or sends to backend
    console.log("Template Data:", templateData);
    alert("Template data saved successfully!");
    // Optionally send to backend with Axios
    // axios.post("http://localhost:5000/saveTemplate", templateData);
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Content:</label>
        <textarea
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginLeft: "10px", width: "300px", padding: "5px" }}
        ></textarea>
      </div>
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h3>Preview:</h3>
        <h1>{title}</h1>
        <p>{content}</p>
        {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: "300px" }} />}
      </div>
      <button onClick={handleSave} style={{ marginTop: "10px", padding: "10px" }}>
        Save Template
      </button>
    </div>
  );
};

export default Editor;
