import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Users from "../model/userModel";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const isUser = await Users.findOne({ email }).exec();

    if (isUser)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: "User already present" });

    try {
      const encPass = await bcrypt.hash(password, 10);
      const addUser = new Users({
        username,
        email,
        password: encPass,
      });

      await addUser.save();
      return res.status(201).json({status:201, sucess:true, message:`User register sucessfully`})

    } catch (error) {
        return res.status(400).json({status:400, sucess:false, message:error})
    }

  } catch (error) {
    return res
      .status(500)
      .json({
        status: 500,
        sucess: false,
        message: `Internal server error:${error}`,
      });
  }
};
