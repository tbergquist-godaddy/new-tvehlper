import { Schema, ObjectId } from 'mongoose';
import { verify } from 'password-hash';

import tvHelperConnection from '../connection';

export interface IUser {
  _id: ObjectId;
  id: string;
  username: string;
  password: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.virtual('id').get(function (this: IUser): string {
  return this._id.toString();
});
userSchema.set('toObject', { virtuals: true });
const UserModel = tvHelperConnection.model<IUser>('users', userSchema);

export async function verifyPassword(username: string, password: string): Promise<Maybe<IUser>> {
  const user = await UserModel.findOne({ username });
  if (user == null || user instanceof Error) {
    return null;
  }
  return verify(password, user.password) ? user : null;
}

export function getUserById(id: string): Promise<Maybe<IUser>> {
  return UserModel.findById(id).select('-password').exec();
}

export default UserModel;
