import {useAppSelector} from './store.ts';
import {favoritesSelectors} from '../store/slices/favorites.ts';

export function useFavoritesCount() {
  const favorites = useAppSelector(favoritesSelectors.favorites);
  return favorites.length;
}
