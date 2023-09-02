import {Request,Response} from "express"

export const healthCheck = (req:Request, res:Response)=> {
    try {
        res.send("Pong")
    } catch (error) {
        res.send(error)
    }
}