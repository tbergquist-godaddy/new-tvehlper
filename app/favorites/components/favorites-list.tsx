import Image from 'next/image';
import Link from 'next/link';

import getFavorites from '../api/get-favorites';

export default async function FavoritesList() {
  const favorites = await getFavorites();
  if (favorites == null) {
    return null;
  }
  return (
    <ul className="overflow-hidden">
      {favorites.map((favorite) => (
        <Link href={`/tv-show/${favorite.id}`} key={favorite.id}>
          <li className="flex border-b -mb-1 mt-1 px-6 py-4 items-center">
            {favorite.image != null && (
              <div className="rounded-full h-12 w-12 absolute">
                <Image
                  fill={true}
                  src={favorite.image.medium}
                  alt={favorite.name}
                  className="rounded-full"
                />
              </div>
            )}
            <div className="pl-14">
              <p className="text-lg font-bold">{favorite.name}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
