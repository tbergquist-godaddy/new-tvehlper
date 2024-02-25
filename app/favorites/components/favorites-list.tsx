import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import getFavorites from '../api/get-favorites';
import EpisodeAirdate from './episode-airdate';

export default async function FavoritesList() {
  const favorites = await getFavorites();
  if (favorites == null) {
    return null;
  }
  return (
    <ul className="overflow-hidden">
      <li className="flex border-b -mb-1 mt-1 px-6 py-4 items-center">
        <div className="flex-1 pl-14">
          <strong>Name</strong>
        </div>
        <div className="flex-1">
          <strong>Next episode</strong>
        </div>
        <div className="flex-1">
          <strong>Previous episode</strong>
        </div>
        <div className="flex-1">
          <strong>Status</strong>
        </div>
      </li>
      {favorites.map((favorite) => {
        if (favorite == null) {
          // TODO: Show that we didn't fetch all
          return null;
        }
        return (
          <Link href={`/tv-show/${favorite.id}`} key={favorite.id}>
            <li className="flex border-b -mb-1 mt-1 px-6 py-4 items-center">
              {favorite.image != null && (
                <div className="rounded-full h-12 w-12 absolute flex-1">
                  <Image
                    fill={true}
                    src={favorite.image.medium}
                    alt={favorite.name}
                    className="rounded-full"
                  />
                </div>
              )}
              <div className="pl-14 flex-1">
                <p className="text-lg font-bold">{favorite.name}</p>
              </div>
              <div className="flex-1">
                {favorite._links.nextepisode?.href != null && (
                  <Suspense fallback={null}>
                    <EpisodeAirdate href={favorite._links.nextepisode?.href} />
                  </Suspense>
                )}
              </div>
              <div className="flex-1">
                {favorite._links.previousepisode?.href != null && (
                  <Suspense fallback={null}>
                    <EpisodeAirdate href={favorite._links.previousepisode?.href} />
                  </Suspense>
                )}
              </div>
              <div className="flex-1">{favorite.status}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
