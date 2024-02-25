'use client';

import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { useState } from 'react';

import { markEpisodeAsUnwatched, markEpisodeAsWatched } from './api/toggle-watched-actions';

import Button from '@/app/components/button';

type Props = {
  isEpisodeWatched: boolean;
  episodeId: number;
};

type HandlerFn = (episodeId: number) => Promise<void>;

export default function EpisodeWatchContainer({ isEpisodeWatched, episodeId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const makeHandleClick = (handler: HandlerFn) => async () => {
    setIsLoading(true);
    await handler(episodeId);
    setIsLoading(false);
  };
  return (
    <div>
      {isEpisodeWatched ? (
        <Button
          design="danger"
          rounded={true}
          title="You have seen this episode"
          aria-label="Mark as unwatched"
          isLoading={isLoading}
          onClick={makeHandleClick(markEpisodeAsUnwatched)}
        >
          <FaRegEyeSlash />
        </Button>
      ) : (
        <Button
          onClick={makeHandleClick(markEpisodeAsWatched)}
          isLoading={isLoading}
          rounded={true}
          title="You have not seen this episode"
          aria-label="Mark as watched"
        >
          <FaRegEye />
        </Button>
      )}
    </div>
  );
}
