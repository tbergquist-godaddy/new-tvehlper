'use server';

import { revalidatePath } from 'next/cache';

import { addFavorite } from '@/src/models/favorite';

export default async function setFavorite(serieId: number) {
  await addFavorite(serieId);
  revalidatePath('/tv-show/[id]', 'page');
}
