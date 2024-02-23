'use server';

import { cookies } from 'next/headers';

function logOut() {
  cookies().set('tvh-jwt', '', {
    expires: new Date(0),
  });
}

export default logOut;
