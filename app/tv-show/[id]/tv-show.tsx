import Image from 'next/image';

import fetchTvShow from './api/fetch-tv-show';
import ToggleFavorite from './toggle-favorite';

import { Section } from '@/app/components/page-layout';
import { isFavorite } from '@/src/models/favorite';

type Props = {
  id: string;
};

export default async function TvShow({ id }: Props) {
  const [show, isShowFavorite] = await Promise.all([fetchTvShow(id), isFavorite(parseInt(id, 10))]);
  if (show == null) {
    return <div>Failed to load the show</div>;
  }
  return (
    <>
      <h1 className="text-3xl font-bold">{show.name}</h1>
      <Section>
        <div className="flex flex-col gap-4 md:flex-row">
          {show.image != null && (
            <div className="relative min-w-80">
              <Image
                height={300}
                width={300}
                className="rounded-lg"
                src={show.image?.medium}
                alt={show.name}
              />
              {isShowFavorite != null && (
                <div className="absolute left-2 bottom-2">
                  <ToggleFavorite serieId={parseInt(id, 10)} isFavorite={isShowFavorite} />
                </div>
              )}
            </div>
          )}
          <div>{show.summary}</div>
        </div>
      </Section>
    </>
  );
}
