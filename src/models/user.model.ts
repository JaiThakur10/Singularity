import mongoose,  { Schema, Document } from "mongoose";


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean,
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true,"Email  is required"],
        unique: true,
        match: [/.+\@.+\..+/
        , 'please use a valid emial address']
    },
    password:{
        type: String,
        required: [true,"please enter a password"],
    },
    verifyCode:{
        type: String,
        required: [true, "verify code is required"]
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true, " Please enter the verification code "],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    
   
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;