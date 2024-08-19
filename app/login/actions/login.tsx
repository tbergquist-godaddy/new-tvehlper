'use server';

import { cookies } from 'next/headers';
import * as z from 'zod';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

import { initialState, type LoginState } from '../login-form';

import errorToErrorMap from '@/app/zod/error-to-error-map';
import { IUser, verifyPassword } from '@/src/models/user';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

const signToken = (user: IUser): string => {
  return jwt.sign({ data: user.id }, process.env.JWT_SECRET ?? '', {
    expiresIn: '1y',
  });
};

export default async function login(_: unknown, formData: FormData): Promise<LoginState> {
  const login = {
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const parsedData = loginSchema.safeParse(login);
  if ('error' in parsedData) {
    return {
      ...initialState,
      fields: errorToErrorMap(parsedData.error?.issues, initialState.fields),
    };
  }

  const user = await verifyPassword(parsedData.data.username, parsedData.data.password);

  if (user == null) {
    return {
      ...initialState,
      form: 'Invalid username or password',
    };
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
