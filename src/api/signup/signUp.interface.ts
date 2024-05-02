import { Model, Schema ,Document } from "mongoose";

export interface ISignUp extends Document {
        userName:string;
        userPhoneNumber:string;
        userCity:string;
        userCountry:string;
        userEmail:string;
        userPassword:string;
        userId: string;
}

export interface ISignUpModel extends Model<ISignUp>{}