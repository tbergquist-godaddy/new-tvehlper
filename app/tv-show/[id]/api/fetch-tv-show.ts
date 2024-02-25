import * as z from 'zod';
import striptags from 'striptags';

const tvShowSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  officialSite: z.string().nullable(),
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
  _links: z.object({
    previousepisode: z
      .object({
        href: z.string(),
      })
      .optional(),
    nextepisode: z
      .object({
        href: z.string(),
      })
      .optional(),
  }),
});

export default async function fetchTvShow(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TV_MAZE_URL}/shows/${id}`);
  if (!response.ok) {
    return null;
  }
  return tvShowSchema.parse(await response.json());
}
