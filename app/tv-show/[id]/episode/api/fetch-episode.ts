import * as z from 'zod';
import striptags from 'striptags';

export const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  season: z.number(),
  number: z.number(),
  airdate: z.string().nullable(),
  image: z
    .object({
      medium: z.string(),
      original: z.string(),
    })
    .nullable(),
  summary: z
    .string()
    .nullable()
    .transform((summary) => (summary == null ? null : striptags(summary))),
});

export default async function fetchEpisode(episodeId: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TV_MAZE_URL}/episodes/${episodeId}`);

  return episodeSchema.parse(await response.json());
}
