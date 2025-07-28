/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// TypeScript type for a full document (includes MongoDB's built-in fields)
export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt
export class User {
  _id(_id: any): string {
    throw new Error('Method not implemented.');
  }
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user', enum: ['user', 'admin'] }) // Enforce role values
  role: string;
}

// Factory to convert decorated class to Mongoose schema
export const UserSchema = SchemaFactory.createForClass(User);
