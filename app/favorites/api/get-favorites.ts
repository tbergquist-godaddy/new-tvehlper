import { getFavoritesByUserId } from '@/src/models/favorite';
import { getLoggedInUserId } from '@/src/services/get-id-from-cookie';

export default function getFavorites() {
  const userId = getLoggedInUserId();
  return userId == null ? null : getFavoritesByUserId(userId);
}
