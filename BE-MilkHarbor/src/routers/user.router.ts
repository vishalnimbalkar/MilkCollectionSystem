import {Router} from 'express'
import mongoose from 'mongoose'
import asynceHandler from 'express-async-handler'
import { userModel } from '../models/user.model'
const router= Router()
const data ={
    name:"vishal",
    address:"pune",
    m_no:"2ue9u29eu298",
    password:"sdjkndj",
    role:"admin",
    status:"sjhgsd",
    is_active:false
}
router.get("/getAll",asynceHandler(
    async (req, res)=>{
    const users=await userModel.find();
    res.send(users)
    }
))



export default router;