'use server';

import { revalidatePath } from 'next/cache';

import { markAsWatched, markAsUnwatched } from '@/src/models/watched-episode';

export async function markEpisodeAsWatched(episodeId: number) {
  await markAsWatched(episodeId);
  revalidatePath('/tv-show/[id]');
}

// mark episode as unwatched
export async function markEpisodeAsUnwatched(episodeId: number) {
  await markAsUnwatched(episodeId);
  revalidatePath('/tv-show/[id]', 'page');
}
