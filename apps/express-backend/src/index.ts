import express from "express";
import dotenv from 'dotenv'
import { sendMail } from "./email";
dotenv.config()

const PORT =process.env.PORT||8000;
const app = express();

app.use(express.json());

app.get("/sendmail",sendMail)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
