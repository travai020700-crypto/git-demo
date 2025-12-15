const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware đọc JSON từ frontend
app.use(express.json());

// Route GET / → test server
app.get("/", (req, res) => {
  res.send("Backend Node.js is running 🚀");
});

// Route GET /login → test trực tiếp trên trình duyệt
app.get("/login", (req, res) => {
  res.json({ success: true, message: "Login API working" });
});

// Route POST /login → nhận dữ liệu từ frontend
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra giả lập
  if (username === "admin" && password === "123") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Login failed" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
