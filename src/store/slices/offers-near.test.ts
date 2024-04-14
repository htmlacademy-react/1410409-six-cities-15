import {getMockShortOffer} from '../../mocks/offers.ts';
import {offersNearSelectors, offersNearSlice} from './offers-near.ts';
import {RequestStatus} from '../../const.ts';
import {fetchOffersNearAction} from '../thunks/offers.ts';


describe('OffersNear slice', () => {
  const testOffer = getMockShortOffer();

  describe('Extra reducers', () => {
    it('should set status to Loading with fetchOffersNearAction.pending', () => {
      const expectedState = {
        offersNear: [],
        status: RequestStatus.Loading,
      };

      const result = offersNearSlice.reducer(undefined, fetchOffersNearAction.pending('', '', testOffer));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with fetchOffersNearAction.fulfilled', () => {
      const expectedState = {
        offersNear: [testOffer],
        status: RequestStatus.Succeed,
      };

      const result = offersNearSlice.reducer(undefined, fetchOffersNearAction.fulfilled([testOffer], '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Failed with fetchOffersNearAction.rejected', () => {
      const expectedState = {
        offersNear: [],
        status: RequestStatus.Failed,
      };

      const result = offersNearSlice.reducer(undefined, fetchOffersNearAction.rejected(new Error(), '', ''));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {
    const testState = {
      [offersNearSlice.name]: {
        offersNear: [testOffer, getMockShortOffer()],
        status: RequestStatus.Succeed,
      }
    };

    it('should return offersNear from state', () => {
      const {offersNear} = testState[offersNearSlice.name];
      const result = offersNearSelectors.offersNear(testState);
      expect(result).toBe(offersNear);
    });

    it('should return status from state', () => {
      const {status} = testState[offersNearSlice.name];
      const result = offersNearSelectors.status(testState);
      expect(result).toBe(status);
    });
  });
});
