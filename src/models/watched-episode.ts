/* eslint-disable @typescript-eslint/no-base-to-string */
import { Schema, ObjectId } from 'mongoose';

import tvHelperConnection from '../connection';
import { getLoggedInUserId } from '../services/get-id-from-cookie';

export interface IWatchedEpisode {
  _id: ObjectId;
  id: string;
  userId: string;
  episodeId: number;
  createdAt?: Date;
}

const WatchedEpisodesSchema = new Schema<IWatchedEpisode>(
  {
    // @ts-expect-error: this works
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    episodeId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

WatchedEpisodesSchema.virtual('id').get(function (this: IWatchedEpisode): string {
  return this._id.toString();
});

WatchedEpisodesSchema.path('userId').get(function (value: Schema.Types.ObjectId) {
  return value.toString();
});

WatchedEpisodesSchema.set('toObject', { virtuals: true, getters: true });
WatchedEpisodesSchema.index({ userId: 1, episodeId: -1 }, { unique: true });

const WatchedEpisode = tvHelperConnection.model<IWatchedEpisode>(
  'watchedEpisodes',
  WatchedEpisodesSchema,
);

export async function isWatched(episodeId: number) {
  const userId = getLoggedInUserId();
  if (userId == null) {
    return null;
  }
  return (await WatchedEpisode.exists({ userId, episodeId })) != null;
}

export async function markAsWatched(episodeId: number) {
  const userId = getLoggedInUserId();
  if (userId == null) {
    return null;
  }
  return WatchedEpisode.create({ userId, episodeId });
}

export async function markAsUnwatched(episodeId: number) {
  const userId = getLoggedInUserId();
  if (userId == null) {
    return null;
  }
  return WatchedEpisode.deleteOne({ userId, episodeId });
}

export default WatchedEpisode;
