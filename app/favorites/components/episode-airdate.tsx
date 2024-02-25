import RenderDate from '@/app/components/render-date';
import fetchEpisode from '@/app/tv-show/[id]/episode/api/fetch-episode';

type Props = {
  href: string;
};

export default async function EpisodeAirdate({ href }: Props) {
  const episodeId = Number(href.split('/').pop());
  const episode = await fetchEpisode(episodeId);
  const airdate = episode.airdate;
  return airdate == null ? null : (
    <div>
      <RenderDate date={airdate} />
    </div>
  );
}
