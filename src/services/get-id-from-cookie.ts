import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { verify } from 'jsonwebtoken';

export const getLoggedInUserId = () => {
  const token = cookies().get('tvh-jwt');
  if (!token || !verify(token.value, process.env.JWT_SECRET ?? '')) {
    return null;
  }

  const { data } = jwtDecode<{ data: string }>(token.value);

  return data;
};
