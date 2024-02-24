'use server';

import { revalidatePath } from 'next/cache';

import { removeFavorite } from '@/src/models/favorite';

export default async function deleteFavorite(serieId: number) {
  await removeFavorite(serieId);
  revalidatePath('/tv-show/[id]');
}
