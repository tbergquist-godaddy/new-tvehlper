'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as z from 'zod';

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export default async function login(formData: FormData) {
  // TODO: Connect to database and return valid token
  const login = {
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const parsedData = loginSchema.safeParse(login);
  if ('error' in parsedData) {
    return parsedData.error.issues;
  }

  cookies().set('tvh-jwt', `<token>`, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });

  // TODO: Redirect to favorites
  redirect('/');
}
