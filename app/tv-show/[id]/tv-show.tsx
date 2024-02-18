import Image from 'next/image';

import fetchTvShow from './api/fetch-tv-show';

import { Section } from '@/app/components/page-layout';

type Props = {
  id: string;
};

export default async function TvShow({ id }: Props) {
  const show = await fetchTvShow(id);

  return (
    <>
      <h1 className="text-3xl font-bold">{show.name}</h1>
      <Section>
        <div className="flex flex-col gap-4 md:flex-row">
          {show.image != null && (
            <Image
              className="rounded-lg"
              height={300}
              width={300}
              src={show.image?.original}
              alt={show.name}
            />
          )}
          <div>{show.summary}</div>
        </div>
      </Section>
    </>
  );
}
