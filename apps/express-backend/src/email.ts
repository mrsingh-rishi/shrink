import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendMail = async (req: Request, res: Response) => {
  let testaccount = await nodemailer.createTestAccount();
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"Shrink" <shweta@gmail.com>', // sender address
    to: "sr.shweta.ast@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};
