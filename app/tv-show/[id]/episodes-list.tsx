import Image from 'next/image';

import fetchEpisodes, { Episodes } from './api/fetch-episodes';

type Props = {
  tvShowId: string;
};

export default async function EpisodesList({ tvShowId }: Props) {
  const episodes = await fetchEpisodes(tvShowId);
  return (
    <ul className="overflow-hidden">
      {episodes.map((episode) => (
        <li className="flex border-b -mb-1 mt-1 px-6 py-4 items-center" key={episode.id}>
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
            <p className="text-lg">
              <strong>{episode.name}</strong>
            </p>
            <p>
              Season {episode.season}, Episode {episode.number}
            </p>
            <p>{episode.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
