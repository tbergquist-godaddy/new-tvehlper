import Link from 'next/link';
import Container from './container';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <Container className="flex justify-between items-center">
        <div className="text-2xl py-3">
          <Link className="py-3" href="/">
            Tvhelper
          </Link>
        </div>
        <div>
          <Link className="py-3" href="/login">
            Login
          </Link>
        </div>
      </Container>
    </nav>
  );
}
