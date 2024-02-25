import Image from 'next/image';
import { Suspense } from 'react';

import fetchEpisodes from '../api/fetch-episodes';
import EpisodeWatchContainer from './watched-container';
import WatchedLoader from './watched-loader';

import { Section } from '@/app/components/page-layout';
import { getLoggedInUserId } from '@/src/services/get-id-from-cookie';
import getAcceptLanguage from '@/src/services/get-language';

type Props = {
  tvShowId: string;
};

export default async function EpisodesList({ tvShowId }: Props) {
  const [episodes, userId] = await Promise.all([fetchEpisodes(tvShowId), getLoggedInUserId()]);
  return (
    <Section>
      <h2 className="text-2xl font-bold">Episodes</h2>
      <ul className="overflow-hidden">
        {episodes.map((episode) => (
          <li
            className="flex border-b -mb-1 mt-1 px-6 py-4 items-center justify-between"
            key={episode.id}
          >
            {episode.image != null && (
              <div className="rounded-full h-12 w-12 absolute">
                <Image
                  fill={true}
                  src={episode.image.medium}
                  alt={episode.name}
                  className="rounded-full"
                />
              </div>
            )}
            <div className="pl-14">
              <h3 className="text-lg font-bold">{episode.name}</h3>
              <p>
                Season {episode.season}, Episode {episode.number}
              </p>
              <p>
                Airdate:{' '}
                {episode.airdate != null
                  ? new Intl.DateTimeFormat(getAcceptLanguage()).format(new Date(episode.airdate))
                  : 'Unknown'}
              </p>
            </div>
            {userId != null && (
              <Suspense fallback={<WatchedLoader />}>
                <EpisodeWatchContainer id={episode.id} />
              </Suspense>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
