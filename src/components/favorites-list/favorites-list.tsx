import {CityName, OffersByCity, OfferShortInfo} from '../../types/offer.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {getCitySlug} from '../../utils/common.ts';
import OfferCard from '../offer-card/offer-card.tsx';

interface FavoritesListProps {
  offersFavoritesByCity: OffersByCity;
}

function FavoritesList ({offersFavoritesByCity}: FavoritesListProps) {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.keys(offersFavoritesByCity)?.map((cityName) =>
            (
              <li key={cityName} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={`${AppRoute.Root}${getCitySlug(cityName as CityName)}`}>
                      <span>{cityName}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offersFavoritesByCity[cityName].map((offer: OfferShortInfo) => (
                      <OfferCard
                        componentType={'favorites'}
                        key={offer.id}
                        offer={offer}
                      />)
                    )
                  }
                </div>
              </li>
            ))
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
