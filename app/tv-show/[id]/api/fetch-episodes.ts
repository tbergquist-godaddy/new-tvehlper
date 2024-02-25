import * as z from 'zod';

import { episodeSchema } from '../episode/api/fetch-episode';

const episodesSchema = z.array(episodeSchema);

export default async function fetchEpisodes(tvshowId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TV_MAZE_URL}/shows/${tvshowId}/episodes`);

  return episodesSchema.parse(await response.json());
}
