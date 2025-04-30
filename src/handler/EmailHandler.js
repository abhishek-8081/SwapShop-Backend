import nodemailer from "nodemailer";

const EmailHandler = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "symbiosisswapshop@gmail.com",
            pass: "lzedbwvsloeilbnn",
        },
    });
    try {
        let info = await transporter.sendMail({
            from: "symbiosisswapshop@gmail.com",
            to: data.email,
            subject: data.subject,
            text: data.msg,
        });
        return { message: "Sent Successfully" };
    } catch (e) {
        console.log(e);
        return { message: "Error Sending Email" };
    }
};

export { EmailHandler };
