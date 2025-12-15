const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend Node.js is running 🚀");
});

app.get("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login API working"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Trigger Render rebuild
// Rebuild to update Render routes
//echo "// trigger rebuild for Render" >> backend-node/login.js

// trigger rebuild
// trigger rebuild
// trigger rebuild
