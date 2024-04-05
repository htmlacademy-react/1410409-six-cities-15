import ContentLoader from 'react-content-loader';
import OfferLoader from '../offer-loader/offer-loader.tsx';
import {OFFERS_LOADER_COUNT} from '../../const.ts';
import {nanoid} from 'nanoid';


function OffersListLoader () {
  const offerLoaders = Array.from({length: OFFERS_LOADER_COUNT}, () => nanoid());
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <div style={{width: '100%'}}>
        <ContentLoader
          speed={2}
          width={572}
          height={120}
          viewBox="0 0 572 120"
          backgroundColor="#f5f5f5"
          foregroundColor="#ecebeb"
        >
          <rect x="2" y="20" rx="8" ry="8" width="450" height="28"/>
          <rect x="2" y="70" rx="4" ry="4" width="100" height="14"/>
        </ContentLoader>
      </div>

      <div className="cities__places-list places__list tabs__content">
        {offerLoaders.map((loader) => <OfferLoader key={loader}/>)}
      </div>
    </section>
  );
}

export default OffersListLoader;
