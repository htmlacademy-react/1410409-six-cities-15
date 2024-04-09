import type {OfferShortInfo} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {offersActions, offersSelectors} from '../../store/slices/offers.ts';
import {sortOffers} from '../../utils/sort.ts';
import {SORT_OPTION_DEFAULT, SortOption} from '../sort/const.ts';
import Sort from '../sort/sort.tsx';
import {useCallback, useState} from 'react';
import {CITIES, RequestStatus} from '../../const.ts';
import OffersListLoader from '../offers-list-loader/offers-list-loader.tsx';

interface OffersListProps {
  offersByCity: OfferShortInfo[];
  city: typeof CITIES[number];
}

function OffersList ({offersByCity, city}: OffersListProps) {
  const [activeSortOption, setActiveSortOption] = useState<SortOption>(SORT_OPTION_DEFAULT);

  const handleSortOptionChange = useCallback((newSortOption: SortOption) => {
    setActiveSortOption(newSortOption);
  }, [setActiveSortOption]);

  const {setActiveOffer} = useActionCreators(offersActions);
  const onHoverCard = useCallback((offerActive: OfferShortInfo | null) => setActiveOffer(offerActive), [setActiveOffer]);
  const status = useAppSelector(offersSelectors.status);

  if (status === RequestStatus.Loading) {
    return (
      <OffersListLoader />
    );
  }

  if (offersByCity.length === 0) {
    return (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city.name}
          </p>
        </div>
      </section>
    );
  }

  const offersSorted = sortOffers(activeSortOption, offersByCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersByCity.length} place{offersByCity.length > 1 && 's'} to stay in {city?.name}
      </b>
      <Sort
        activeSortOption={activeSortOption}
        setActiveSortOption={handleSortOptionChange}
      />
      <div className="cities__places-list places__list tabs__content">
        {offersSorted.map((offer: OfferShortInfo) =>
          (
            <OfferCard
              key={offer.id}
              componentType={'cities'}
              offer={offer}
              onHoverCard={onHoverCard}
            />
          ))}
      </div>
    </section>

  );
}

export default OffersList;
