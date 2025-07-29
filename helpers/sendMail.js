const nodemailer = require("nodemailer");

module.exports.sendMail = async (email, subject, html) => {
  // Tạo transporter với thông tin SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail", // Hoặc 'hotmail', 'yahoo', tùy theo nhà cung cấp email
    auth: {
      user: process.env.EMAIL_USER, // Thay bằng email của bạn
      pass: process.env.EMAIL_PASSWORD, // Mật khẩu ứng dụng (nếu dùng Gmail cần tạo App Password)
    },
  });

  // Thiết lập nội dung email
  const mailOptions = {
    from: "thoconditonglao123@gmail.com", // Email người gửi
    to: email, // Email người nhận
    subject: subject,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email đã được gửi: " + info.response);
  } catch (error) {
    console.error("Lỗi khi gửi email:", error);
  }
};
