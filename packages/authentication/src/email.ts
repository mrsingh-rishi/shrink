import { Request, Response} from "express"

export const sendMail = (req: Request, res:Response)=>{
    res.send("i am sending mail")
}