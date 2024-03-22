import OfferCard from '../../components/offer-card/offer-card.tsx';
import Header from '../../components/header/header.tsx';
import LocationTab from '../../components/location-tab/location-tab.tsx';
import {OfferShortInfo} from '../../types/offer.ts';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import {CITIES} from '../../const.ts';
import {useEffect, useState} from 'react';
import Map from '../../components/map/map.tsx';
import {useLocation} from 'react-router-dom';

export type MainProps = {
  offers: OfferShortInfo[];
  offersCount: number;
  title?: string;
}

function Main({offers, offersCount, title = 'Main'}: MainProps) {
  useDocumentTitle(title);
  const [activeOffer, setActiveOffer] = useState<OfferShortInfo | null>(null);
  const location = useLocation();
  const [citySlug, setCitySlug] = useState(location.pathname.split('/').pop());
  useEffect(() => {
    setCitySlug(location.pathname.split('/').pop());
  }, [location]);

  const currentCity = CITIES.find((city) => city.slug === citySlug);

  return (
    <div className="page page--gray page--main">
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
          <div className="cities__places-container container">
            <section className="cities__places places">

              <span>Now active offer id: {activeOffer?.id}</span>

              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer: OfferShortInfo) => <OfferCard hoverHandler={() => setActiveOffer(offer || null)} componentType={'cities'} key={offer.id} offer={offer}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              {
                currentCity && <Map container="cities" city={currentCity} offers={offers} activeOffer={activeOffer} />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
