import ToggleWatched from './toggle-watched';

import { isWatched } from '@/src/models/watched-episode';

type Props = {
  id: number;
};

export default async function EpisodeWatchContainer({ id }: Props) {
  const isEpisodeWatched = await isWatched(id);
  return (
    <div>
      {isEpisodeWatched != null && (
        <ToggleWatched episodeId={id} isEpisodeWatched={isEpisodeWatched} />
      )}
    </div>
  );
}
