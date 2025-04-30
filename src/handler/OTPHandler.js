import nodemailer from "nodemailer";

const OTPHandler = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "symbiosisswapshop@gmail.com",
            pass: "lzedbwvsloeilbnn",
        },
    });
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        let info = await transporter.sendMail({
            from: "symbiosisswapshop@gmail.com",
            to: data.email,
            subject: "Authentication Code: Please Verify Your Account",
            html: `<p>Dear ${data.username},</p>
            <p>Thank you for signing up with <strong>Symbiosis SwapShop</strong>. To verify your email address and complete the registration process, please use the following one-time password (OTP):</p>
            <br><p><strong>Your One-Time Password (OTP): ${otp}</strong></p><br>
            <p>Please enter this OTP in the designated field on our website to confirm your identity and gain access to your account.</p>
            <p>If you did not attempt to register for an account with Symbiosis SwapShop, please disregard this email. Your account security is important to us, and we recommend not sharing this OTP with anyone.</p>
            <p>If you have any questions or need further assistance, please don't hesitate to contact our support team at <a href="mailto:symbiosisswapshop@gmail.com">symbiosisswapshop@gmail.com</a>.</p>
            <p>Thank you for choosing Symbiosis SwapShop.</p>
            <p>Sincerely,</p><br>
            <p>Team Pawsibilities<br>
            Symbiosis SwapShop</p>`,
        });
        return { message: "Sent Successfully", otp: otp };
    } catch (e) {
        console.log(e);
        return { message: "Error Sending Email" };
    }
};

export { OTPHandler };
