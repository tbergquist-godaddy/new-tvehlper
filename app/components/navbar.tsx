import Link from 'next/link';

import Container from './container';
import LogoutLink from './logout-link';

import { getLoggedInUserId } from '@/src/services/get-id-from-cookie';

export default async function Navbar() {
  const userId = await getLoggedInUserId();
  return (
    <nav className="bg-blue-600 text-white">
      <Container className="flex justify-between items-center">
        <div className="text-2xl py-3">
          <Link className="py-3" href="/">
            Tvhelper
          </Link>
        </div>
        <div>
          {userId == null ? (
            <Link className="py-3" href="/login">
              Login
            </Link>
          ) : (
            <LogoutLink />
          )}
        </div>
      </Container>
    </nav>
  );
}
