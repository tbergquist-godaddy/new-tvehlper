import Link from 'next/link';

import Container from './container';
import LogoutLink from './logout-link';

import { getLoggedInUserId } from '@/src/services/get-id-from-cookie';

export default async function Navbar() {
  const userId = await getLoggedInUserId();
  const isLoggedIn = userId != null;
  return (
    <nav className="bg-blue-600 text-white">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl py-3">
            <Link className="py-3" href="/">
              Tvhelper
            </Link>
          </div>
          {isLoggedIn && (
            <Link className="py-3" href="/favorites">
              Favorites
            </Link>
          )}
        </div>
        <div>
          {!isLoggedIn ? (
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
