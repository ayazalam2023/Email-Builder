const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Endpoint to upload images
app.post("/uploadImage", upload.single("image"), (req, res) => {
  const file = req.file;
  const imageUrl = `http://localhost:5000/uploads/${file.filename}`;
  res.json({ imageUrl });
});

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Endpoint to save template data
app.post("/saveTemplate", (req, res) => {
  const { title, content, image } = req.body;
  console.log("Template Data Received:", { title, content, image });
  res.json({ message: "Template saved successfully!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
