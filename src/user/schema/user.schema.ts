import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userId: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);