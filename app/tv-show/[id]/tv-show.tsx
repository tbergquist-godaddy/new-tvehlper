import Image from 'next/image';

import fetchTvShow from './api/fetch-tv-show';

import { Section } from '@/app/components/page-layout';

type Props = {
  id: string;
};

export default async function TvShow({ id }: Props) {
  const show = await fetchTvShow(id);
  if (show == null) {
    return <div>Failed to load the show</div>;
  }
  return (
    <>
      <h1 className="text-3xl font-bold">{show.name}</h1>
      <Section>
        <div className="flex flex-col gap-4 md:flex-row">
          {show.image != null && (
            <Image
              height={300}
              width={300}
              className="rounded-lg"
              src={show.image?.medium}
              alt={show.name}
            />
          )}
          <div>{show.summary}</div>
        </div>
      </Section>
    </>
  );
}
