import {RequestStatus} from '../../const.ts';
import {favoritesSelectors, favoritesSlice} from './favorites.ts';
import {getMockShortOffer} from '../../mocks/offers.ts';
import {fetchFavoritesAction, toggleFavoriteAction} from '../thunks/offers.ts';

describe('Favorites slice', () => {
  const initialState = {
    favorites: [],
    statusFetchFavorites: RequestStatus.Idle,
    statusToggleFavorite: RequestStatus.Idle,
  };

  describe('Extra reducers', () => {
    const testFavorite = getMockShortOffer();
    it('should set status to Loading with fetchFavoritesAction.pending', () => {
      const expectedState = {
        favorites: [],
        statusFetchFavorites: RequestStatus.Loading,
        statusToggleFavorite: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(initialState, fetchFavoritesAction.pending('', undefined, testFavorite));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Loading with fetchFavoritesAction.fulfilled', () => {
      const expectedState = {
        favorites: [testFavorite],
        statusFetchFavorites: RequestStatus.Succeed,
        statusToggleFavorite: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(initialState, fetchFavoritesAction.fulfilled([testFavorite], '', undefined, ''));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Failed with fetchFavoritesAction.rejected', () => {
      const expectedState = {
        favorites: [],
        statusFetchFavorites: RequestStatus.Failed,
        statusToggleFavorite: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(initialState, fetchFavoritesAction.rejected(new Error(), '', undefined, ''));
      expect(result).toEqual(expectedState);
    });

    it('should change isFavorite in testFavoriteIsFavoriteFalse, add testFavoriteIsFavoriteTrue to favorites, set statusToggleFavorite Succeed', () => {
      const testFavoriteIsFavoriteFalse = getMockShortOffer();
      const testFavoriteIsFavoriteTrue = Object.assign({}, testFavoriteIsFavoriteFalse, {isFavorite: true});
      const testFavoriteId = testFavoriteIsFavoriteFalse.id;
      const anotherFavoriteOne = getMockShortOffer(true);
      const anotherFavoriteTwo = getMockShortOffer(true);

      const testState = {
        favorites: [anotherFavoriteOne, anotherFavoriteTwo],
        statusFetchFavorites: RequestStatus.Idle,
        statusToggleFavorite: RequestStatus.Loading,
      };

      const expectedState = {
        favorites: [anotherFavoriteOne, anotherFavoriteTwo, testFavoriteIsFavoriteTrue],
        statusFetchFavorites: RequestStatus.Idle,
        statusToggleFavorite: RequestStatus.Succeed,
      };

      const result = favoritesSlice.reducer(testState, toggleFavoriteAction.fulfilled(testFavoriteIsFavoriteTrue, '', {offerId: testFavoriteId, status: 1}));
      expect(result).toEqual(expectedState);
    });

    it('should change isFavorite in testFavoriteIsFavoriteFalse, remove testFavoriteIsFavoriteTrue from favorites, set statusToggleFavorite Succeed', () => {
      const testFavoriteIsFavoriteTrue = getMockShortOffer(true);
      const testFavoriteIsFavoriteFalse = Object.assign({}, testFavoriteIsFavoriteTrue, {isFavorite: false});
      const testFavoriteId = testFavoriteIsFavoriteFalse.id;
      const anotherFavoriteOne = getMockShortOffer(true);
      const anotherFavoriteTwo = getMockShortOffer(true);

      const testState = {
        favorites: [anotherFavoriteOne, testFavoriteIsFavoriteTrue, anotherFavoriteTwo],
        statusFetchFavorites: RequestStatus.Idle,
        statusToggleFavorite: RequestStatus.Loading,
      };

      const expectedState = {
        favorites: [anotherFavoriteOne, anotherFavoriteTwo],
        statusFetchFavorites: RequestStatus.Idle,
        statusToggleFavorite: RequestStatus.Succeed,
      };

      const result = favoritesSlice.reducer(testState, toggleFavoriteAction.fulfilled(testFavoriteIsFavoriteFalse, '', {offerId: testFavoriteId, status: 0}));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {
    const testState = {
      [favoritesSlice.name]: {
        favorites: [getMockShortOffer(), getMockShortOffer(),],
        statusFetchFavorites: RequestStatus.Succeed,
        statusToggleFavorite: RequestStatus.Loading,
      }
    };

    it('should return empty array favorites from state with empty favorites', () => {
      const testStateWithEmptyFavorites = Object.assign({}, testState, {
        [favoritesSlice.name]: Object.assign({}, testState[favoritesSlice.name], {
          favorites: []
        })
      });
      const {favorites} = testStateWithEmptyFavorites[favoritesSlice.name];
      const result = favoritesSelectors.favorites(testStateWithEmptyFavorites);
      expect(result).toBe(favorites);
    });

    it('should return favorites from state', () => {
      const {favorites} = testState[favoritesSlice.name];
      const result = favoritesSelectors.favorites(testState);
      expect(result).toBe(favorites);
    });

    it('should return statusFetchFavorites from state', () => {
      const {statusFetchFavorites} = testState[favoritesSlice.name];
      const result = favoritesSelectors.statusFetchFavorites(testState);
      expect(result).toBe(statusFetchFavorites);
    });

    it('should return statusToggleFavorite from state', () => {
      const {statusToggleFavorite} = testState[favoritesSlice.name];
      const result = favoritesSelectors.statusToggleFavorite(testState);
      expect(result).toBe(statusToggleFavorite);
    });
  });
});
