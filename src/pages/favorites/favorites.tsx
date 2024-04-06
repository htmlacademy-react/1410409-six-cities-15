import Header from '../../components/header/header.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import Footer from '../../components/footer/footer.tsx';
import {Link} from 'react-router-dom';
import {AppRoute, RequestStatus} from '../../const.ts';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {favoritesActions, favoritesSelectors} from '../../store/slices/favorites.ts';
import {useEffect} from 'react';
import {CityName, OffersByCity, OfferShortInfo} from '../../types/offer.ts';
import {getCitySlug} from '../../utils/common.ts';

interface FavoritesProps {
  title?: string;
}

function Favorites({title = 'Favorites'}: FavoritesProps) {
  useDocumentTitle(title);

  const {fetchFavorites} = useActionCreators(favoritesActions);
  const statusToggleFavorite = useAppSelector(favoritesSelectors.statusToggleFavorite);
  const offersFavorites = useAppSelector(favoritesSelectors.favorites);

  useEffect(() => {
    if (statusToggleFavorite === RequestStatus.Succeed || statusToggleFavorite === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [fetchFavorites, statusToggleFavorite]);

  if (offersFavorites.length === 0) {
    return <FavoritesEmpty />;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const offersFavoritesByCity: OffersByCity = Object.groupBy(offersFavorites, ({city}) => city.name) as OffersByCity;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                  )
                )
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
