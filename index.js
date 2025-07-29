const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors")
const database = require("./config/database");
require("dotenv").config();

const routesApiVer1 = require("./app/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

app.use(cors())

database.connect();

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("keyboard cat"));
app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: "your-secret-key", // Bắt buộc phải có
    resave: false, // Chọn false để tránh lưu lại session không thay đổi
    saveUninitialized: false, // Chọn false để tránh tạo session cho những request không cần
    cookie: { secure: false }, // Tuỳ chọn (đặt true nếu dùng HTTPS)
  })
);

// 🔰 Routes Version 1
routesApiVer1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
