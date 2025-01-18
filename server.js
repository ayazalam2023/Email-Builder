
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get Email Layout
app.get("/getEmailLayout", (req, res) => {
  const filePath = path.join(__dirname, "templates", "layout.html");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading layout file.");
    }
    res.json({ html: data });
  });
});

// Upload Image
const upload = multer({ dest: "uploads/" });
app.post("/uploadImage", upload.single("image"), (req, res) => {
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Save Email Config
app.post("/uploadEmailConfig", (req, res) => {
  const config = req.body;
  fs.writeFile("emailConfig.json", JSON.stringify(config), (err) => {
    if (err) {
      return res.status(500).send("Error saving configuration.");
    }
    res.send("Configuration saved successfully.");
  });
});

// Serve static files (e.g., images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    