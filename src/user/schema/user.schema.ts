import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ isRequired: true })
  Name: string;

  @Prop({ isRequired: true, unique: true })
  Email: string;

  @Prop({ isRequired: true })
  Password: string;

  @Prop({ isRequired: true })
  Phone: number;

  @Prop({ isRequired: true })
  Gender: Gender;
}

export const UserSchema = SchemaFactory.createForClass(User);
