import {NextFunction, Request,Response} from "express"
import { validatePassword } from "../util/passwordValidator";
import { validateEmail } from "../util/emailValidator";

export const checkRegister =async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {username,email,password} = req.body;
        if(!username) return res.status(400).json({status:400, sucess:false, message:"username is required"});
        if(!email) return res.status(400).json({status:400, sucess:false, message:"email is required"})
        if(!password) return res.status(400).json({status:400, sucess:false, message:"password is required"})

        try {
             validatePassword(password);
             validateEmail(email);
        } catch (error) {
            return res.status(400).json({status:400, sucess:false, message:`${error}`})
        }

        next();
           
    } catch (error) {
        return res.status(500).json({status:500, sucess:false, message:`Internal Server Error`})
    }
}