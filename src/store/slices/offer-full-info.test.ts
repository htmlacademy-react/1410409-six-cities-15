import {offerFullInfoSelectors, offerFullInfoSlice} from './offer-full-info.ts';
import {RequestStatus} from '../../const.ts';
import {getMockFullOffer} from '../../mocks/offers.ts';
import {fetchOfferFullInfoAction} from '../thunks/offers.ts';


describe('offerFullInfo slice', () => {
  describe('Extra reducers', () => {
    it('should set status to Loading with fetchOfferFullInfoAction.pending', () => {
      const testOfferFullInfo = getMockFullOffer();
      const expectedState = {
        offerFullInfo: null,
        status: RequestStatus.Loading,
      };

      const result = offerFullInfoSlice.reducer(undefined, fetchOfferFullInfoAction.pending('', '', testOfferFullInfo));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with fetchOfferFullInfoAction.fulfilled', () => {
      const testOfferFullInfo = getMockFullOffer();
      const expectedState = {
        offerFullInfo: testOfferFullInfo,
        status: RequestStatus.Succeed,
      };

      const result = offerFullInfoSlice.reducer(undefined, fetchOfferFullInfoAction.fulfilled(testOfferFullInfo, '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with fetchOfferFullInfoAction.fulfilled', () => {
      const expectedState = {
        offerFullInfo: null,
        status: RequestStatus.Failed,
      };

      const result = offerFullInfoSlice.reducer(undefined, fetchOfferFullInfoAction.rejected(new Error(), '', ''));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {
    const testFullOffer = getMockFullOffer();
    const testState = {
      [offerFullInfoSlice.name]: {
        offerFullInfo: testFullOffer,
        status: RequestStatus.Succeed,
      }
    };

    it('should return offerFullInfo from state', () => {
      const {offerFullInfo} = testState[offerFullInfoSlice.name];
      const result = offerFullInfoSelectors.offerFullInfo(testState);
      expect(result).toBe(offerFullInfo);
    });

    it('should return status from state', () => {
      const {status} = testState[offerFullInfoSlice.name];
      const result = offerFullInfoSelectors.status(testState);
      expect(result).toBe(status);
    });
  });
});
