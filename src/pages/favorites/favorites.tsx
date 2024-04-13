import Header from '../../components/header/header.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import Footer from '../../components/footer/footer.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import {useAppSelector} from '../../hooks/store.ts';
import {favoritesSelectors} from '../../store/slices/favorites.ts';
import {OffersByCity} from '../../types/offer.ts';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';

interface FavoritesProps {
  title?: string;
}

function Favorites({title = 'Favorites'}: FavoritesProps) {
  useDocumentTitle(title);

  const offersFavorites = useAppSelector(favoritesSelectors.favorites);

  if (offersFavorites.length === 0) {
    return <FavoritesEmpty />;
  }

  const offersFavoritesByCity: OffersByCity = Object.groupBy(offersFavorites, ({city}) => city.name) as OffersByCity;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offersFavoritesByCity={offersFavoritesByCity} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
