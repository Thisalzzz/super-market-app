import { Router } from 'express'
import {loginController, logoutController, refreshToken, registerUserController, updateUserDetails, uploadAvatar, userDetails } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)




export default userRouter