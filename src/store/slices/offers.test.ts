import {RequestStatus} from '../../const.ts';
import {offersSelectors, offersSlice} from './offers.ts';
import {getMockShortOffer} from '../../mocks/offers.ts';
import {fetchOffersAction, toggleFavoriteAction} from '../thunks/offers.ts';


describe('Offers slice', () => {

  describe('Reducers', () => {
    const initialState = {
      offers: [],
      offersFavorites: [],
      activeOffer: null,
      status: RequestStatus.Idle,
    };
    const testOffer = getMockShortOffer();
    const testState = {
      offers: [],
      offersFavorites: [],
      activeOffer: testOffer,
      status: RequestStatus.Idle,
    };

    it('should return initial state with undefined state and empty action', () => {
      const emptyAction = {type: ''};

      const result = offersSlice.reducer(undefined, emptyAction);
      expect(result).toEqual(initialState);
    });

    it('should return expected state with expected state and empty action', () => {
      const emptyAction = {type: ''};

      const result = offersSlice.reducer(testState, emptyAction);
      expect(result).toEqual(testState);
    });

    it('should return expected state with initial state and expected activeOffer', () => {

      const result = offersSlice.reducer(initialState, {type: 'offers/setActiveOffer', payload: testOffer});
      expect(result).toEqual(testState);
    });
  });

  describe('Extra reducers', () => {
    it('should set status to Loading with fetchOffersAction.pending', () => {
      const testOffer = getMockShortOffer();
      const expectedState = {
        offers: [],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Loading,
      };

      const result = offersSlice.reducer(undefined, fetchOffersAction.pending('', undefined, testOffer));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with fetchOffersAction.fulfilled, add test offer to offers', () => {
      const testOffer = getMockShortOffer();
      const expectedState = {
        offers: [testOffer],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Succeed,
      };

      const result = offersSlice.reducer(undefined, fetchOffersAction.fulfilled([testOffer], '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Failed with fetchOffersAction.rejected', () => {
      const expectedState = {
        offers: [],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Failed,
      };

      const result = offersSlice.reducer(undefined, fetchOffersAction.rejected(new Error(), '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should toggle isFavorite to true in testOffer on toggleFavoriteAction.fulfilled', () => {
      const testOfferIsFavoriteFalse = getMockShortOffer(false);
      const testOfferIsFavoriteTrue = Object.assign({}, testOfferIsFavoriteFalse, {isFavorite: true});
      const anotherTestOffer = getMockShortOffer(true);
      const initialState = {
        offers: [testOfferIsFavoriteFalse, anotherTestOffer],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Succeed,
      };
      const expectedState = {
        offers: [testOfferIsFavoriteTrue, anotherTestOffer],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Succeed,
      };

      const result = offersSlice.reducer(initialState, toggleFavoriteAction.fulfilled(testOfferIsFavoriteTrue, '', {offerId: testOfferIsFavoriteTrue.id, status: 1}));
      expect(result).toEqual(expectedState);
    });

    it('should toggle isFavorite to false in testOffer on toggleFavoriteAction.fulfilled', () => {
      const testOfferIsFavoriteTrue = getMockShortOffer(true);
      const testOfferIsFavoriteFalse = Object.assign({}, testOfferIsFavoriteTrue, {isFavorite: false});
      const anotherTestOffer = getMockShortOffer(false);
      const initialState = {
        offers: [testOfferIsFavoriteTrue, anotherTestOffer],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Succeed,
      };
      const expectedState = {
        offers: [testOfferIsFavoriteFalse, anotherTestOffer],
        offersFavorites: [],
        activeOffer: null,
        status: RequestStatus.Succeed,
      };

      const result = offersSlice.reducer(initialState, toggleFavoriteAction.fulfilled(testOfferIsFavoriteFalse, '', {offerId: testOfferIsFavoriteTrue.id, status: 0}));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {
    const testActiveOffer = getMockShortOffer();
    const state = {
      [offersSlice.name]: {
        offers: [getMockShortOffer(), testActiveOffer, getMockShortOffer()],
        offersFavorites: [testActiveOffer],
        activeOffer: testActiveOffer,
        status: RequestStatus.Succeed,
      }
    };

    it('should return offers from state', () => {
      const {offers} = state[offersSlice.name];
      const result = offersSelectors.offers(state);
      expect(result).toBe(offers);
    });

    it('should return activeOffer from state', () => {
      const {activeOffer} = state[offersSlice.name];
      const result = offersSelectors.activeOffer(state);
      expect(result).toBe(activeOffer);
    });

    it('should return status from state', () => {
      const {status} = state[offersSlice.name];
      const result = offersSelectors.status(state);
      expect(result).toBe(status);
    });
  });
});
