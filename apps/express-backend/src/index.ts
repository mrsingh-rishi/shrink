import express from "express";
import dotenv from 'dotenv'
import passport from 'passport'
import { sendMail } from "./email";
import './google'
dotenv.config()
const app = express();
const PORT =process.env.PORT||8000;

app.use(express.json());

app.get("/auth/email",sendMail);
app.get("/auth/google/success",(req,res)=>{res.send("request success")});
app.get("/auth/google/failure",(req,res)=>{res.send("request failure")});

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
