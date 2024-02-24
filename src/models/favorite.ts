import { Schema } from 'mongoose';

import tvHelperConnection from '../connection';
import { getLoggedInUserId } from '../services/get-id-from-cookie';

import fetchTvShow from '@/app/tv-show/[id]/api/fetch-tv-show';

export interface IFavorite {
  _id: string;
  userId: string;
  serieId: number;
}

const favoritesSchema = new Schema<IFavorite>({
  // @ts-ignore: Fix later, this works
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  serieId: {
    type: Number,
    required: true,
  },
});

favoritesSchema.index({ userId: 1, serieId: -1 }, { unique: true });
favoritesSchema.set('toObject', { getters: true });
favoritesSchema.path('userId').get(function (value: Schema.Types.ObjectId) {
  return value.toString();
});

const FavoriteModel = tvHelperConnection.model<IFavorite>('favorites', favoritesSchema);

export async function getFavoritesByUserId(userId: string) {
  const ids = (await FavoriteModel.find({ userId })).map((item) => item.toObject().serieId);
  const promises = [];
  for (const id of ids) {
    promises.push(fetchTvShow(id.toString()));
  }
  return Promise.all(promises);
}

export async function isFavorite(serieId: number) {
  const userId = await getLoggedInUserId();
  if (userId == null) {
    return null;
  }
  return (await FavoriteModel.exists({ userId, serieId })) != null;
}

export const addFavorite = async (serieId: number) => {
  const userId = await getLoggedInUserId();
  if (userId == null || serieId == null) {
    return null;
  }
  return (await FavoriteModel.create({ userId, serieId })).toObject();
};

export const removeFavorite = async (serieId: number) => {
  const userId = await getLoggedInUserId();
  if (userId == null || serieId == null) {
    return null;
  }
  return await FavoriteModel.deleteOne({ userId, serieId });
};

export default FavoriteModel;
