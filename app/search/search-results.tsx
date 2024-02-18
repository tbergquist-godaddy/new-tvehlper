import Image from 'next/image';
import Link from 'next/link';

import searchTvShow from './api/search-tv-shows';

type Props = {
  query: string | undefined;
};

export default async function SearchResults({ query }: Props) {
  const shows = await searchTvShow(query);

  return (
    <div>
      {shows != null && (
        <div className="grid grid-cols-fit gap-4">
          {shows.map(({ show }) => (
            <Link key={show.id} href={`/tv-show/${show.id}`}>
              <div
                key={show.id}
                className="bg-gray-100 rounded-lg relative overflow-hidden min-h-96"
              >
                {show.image != null && (
                  <Image fill={true} src={show.image?.medium} alt={show.name} />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-700 opacity-80 text-white p-4">
                  {[show.rating.average, show.name].filter(Boolean).join(': ')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
