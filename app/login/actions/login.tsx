'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as z from 'zod';
import jwt from 'jsonwebtoken';

import UserModel, { IUser, verifyPassword } from '@/src/models/user';

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

const signToken = (user: IUser): string => {
  return jwt.sign({ data: user.id }, process.env.JWT_SECRET ?? '', {
    expiresIn: '1y',
  });
};

export default async function login(formData: FormData) {
  const login = {
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const parsedData = loginSchema.safeParse(login);
  if ('error' in parsedData) {
    return parsedData.error.issues;
  }

  const user = await verifyPassword(parsedData.data.username, parsedData.data.password);

  if (user == null) {
    return 'Invalid username or password';
  }

  cookies().set('tvh-jwt', signToken(user), {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });

  redirect('/favorites');
}
