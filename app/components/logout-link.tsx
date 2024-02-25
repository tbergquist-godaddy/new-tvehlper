'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import logOut from './actions/logout';
import Button from './button';

export default function LogoutLink() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <form
      method="POST"
      action={() => {
        logOut();
        const url = new URL(window.location.href);
        if (url.pathname !== '/') {
          router.push('/');
        }
        router.refresh();
      }}
      ref={ref}
    >
      <Button className="py-3" type="submit">
        Logout
      </Button>
    </form>
  );
}
