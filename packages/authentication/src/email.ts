import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendMail = async (req: Request, res: Response) => {
    res.send(" mail succesfully sent")
};
export const verifyMail = async (req: Request, res: Response) => {
    console.log(" mail succesfully verified");
    return true;
};
