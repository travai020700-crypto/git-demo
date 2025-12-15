const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Parse JSON request body
app.use(express.json());

// Serve frontend HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../html-frontend/index.html"));
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Demo login check
  if (username === "admin" && password === "123") {
    res.json({
      success: true,
      message: "Login successful",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
