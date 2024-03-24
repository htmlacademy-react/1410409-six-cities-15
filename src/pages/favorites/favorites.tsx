import Header from '../../components/header/header.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import Footer from '../../components/footer/footer.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import {useAppSelector} from '../../hooks/store.ts';
import {offersSelectors} from '../../store/slices/offers.ts';

interface FavoritesProps {
  title?: string;
}

function Favorites({title = 'Favorites'}: FavoritesProps) {
  useDocumentTitle(title);

  const offersFavorites = useAppSelector(offersSelectors.offersFavorites);

  if (!offersFavorites.length) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={`${AppRoute.Root}`}>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offersFavorites.map((offer) =>
                      (
                        <OfferCard
                          componentType={'favorites'}
                          key={offer.id}
                          offer={offer}
                        />
                      ))
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
