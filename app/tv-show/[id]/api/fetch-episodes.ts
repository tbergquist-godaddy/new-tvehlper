import * as z from 'zod';
import striptags from 'striptags';

const episodesSchema = z.array(
  z.object({
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
  }),
);

export type Episodes = z.infer<typeof episodesSchema>;

export default async function fetchEpisodes(tvshowId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TV_MAZE_URL}/shows/${tvshowId}/episodes`);

  return episodesSchema.parse(await response.json());
}
