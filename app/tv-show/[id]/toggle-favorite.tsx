'use client';

import { MdOutlineFavorite } from 'react-icons/md';
import { LuHeartOff } from 'react-icons/lu';
import { useState } from 'react';

import setFavorite from './api/set-favorite';
import removeFavorite from './api/remove-favorite';

import Button from '@/app/components/button';

type Props = {
  isFavorite: boolean;
  serieId: number;
};

export default function ToggleFavorite({ isFavorite, serieId }: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {isFavorite ? (
        <Button
          onClick={async () => {
            setLoading(true);
            await removeFavorite(serieId);
            setLoading(false);
          }}
          rounded={true}
          aria-label="Remove favorite"
          title="Remove favorite"
          design="danger"
          isLoading={loading}
        >
          <LuHeartOff />
        </Button>
      ) : (
        <Button
          onClick={async () => {
            setLoading(true);
            await setFavorite(serieId);
            setLoading(false);
          }}
          rounded={true}
          aria-label="Add favorite"
          title="Add favorite"
          isLoading={loading}
        >
          <MdOutlineFavorite />
        </Button>
      )}
    </>
  );
}
