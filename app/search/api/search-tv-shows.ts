import * as z from "zod";

const searchSchema = z.array(
  z.object({
    score: z.number(),
    show: z.object({
      id: z.number(),
      name: z.string(),
      summary: z.string(),
      image: z
        .object({
          medium: z.string(),
          original: z.string(),
        })
        .nullable(),
    }),
  })
);

export default async function searchTvShow(query: Maybe<string>) {
  if (query == null) {
    return null;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TV_MAZE_URL}/search/shows?q=${query}`
  );
  const shows = await response.json();
  return searchSchema.parse(shows);
}
