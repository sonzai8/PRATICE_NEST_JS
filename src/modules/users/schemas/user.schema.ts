
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {IsNotEmpty} from "class-validator";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    image: string;

    @Prop({ default: "USERS"})
    role: string;

    @Prop({ default: "LOCAL" })
    accountType: string; //LOCAL, GOOGLE, GITHUB

    @Prop({ default: false})
    isActive: boolean;

    @Prop()
    codeId: string;

    @Prop()
    codeExpired: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
