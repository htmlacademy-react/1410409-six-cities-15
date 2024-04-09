import Header from '../../components/header/header.tsx';
import LocationTab from '../../components/location-tab/location-tab.tsx';
import {CitySlug} from '../../types/offer.ts';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import {CITIES, RequestStatus} from '../../const.ts';
import Map from '../../components/map/map.tsx';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {offersActions, offersSelectors} from '../../store/slices/offers.ts';
import {useEffect} from 'react';
import OffersList from '../../components/offers-list/offers-list.tsx';
import {toast} from 'react-toastify';
import {AxiosError} from 'axios';
import {classNames} from '../../utils/class-names/class-names.ts';
import Loader from '../../components/loader/loader.tsx';

export type MainProps = {
  title?: string;
  citySlug: CitySlug;
}

function Main({title = 'Main', citySlug}: MainProps) {
  useDocumentTitle(title);
  const {fetchOffers} = useActionCreators(offersActions);

  const status = useAppSelector(offersSelectors.status);
  const allOffers = useAppSelector(offersSelectors.offers);

  useEffect(() => {
    fetchOffers().unwrap().catch((err: AxiosError) => {
      toast.warning(err.message);
    }) ;
  }, []);


  const activeCity = CITIES.find((city) => city.slug === citySlug);

  if (!activeCity) {
    return null;
  }

  const offersByCity = allOffers.filter((offer) => offer.city.name === activeCity.name);

  if (status === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <div className={classNames('page page--gray page--main', offersByCity.length === 0 && 'page__main--index-empty')}>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <LocationTab />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className={classNames('cities__places-container container', offersByCity.length === 0 && 'cities__places-container--empty')}>
            <OffersList offersByCity={offersByCity} city={activeCity} />
            <div className="cities__right-section">
              {
                activeCity && offersByCity.length > 0 && <Map container="cities" city={activeCity} offers={offersByCity} />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
