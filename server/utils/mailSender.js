const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST || "smtp.mailtrap.io",
            port: Number(process.env.MAIL_PORT) || 2525,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.MAIL_FROM || "Edvitya <no-reply@edvitya.com>",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent successfully", info.response);
        return info;
    } catch (error) {
        console.log("Email sending failed:", error.message);
        return {
            success: false,
            error: error.message,
        };
    }
};

module.exports = mailSender;