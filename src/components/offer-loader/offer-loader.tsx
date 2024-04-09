import ContentLoader from 'react-content-loader';
import {memo} from 'react';

function OfferLoader_() {

  return (
    <div className="cities__places-list places__list tabs__content">
      <ContentLoader
        speed={2}
        width={285}
        height={330}
        viewBox="0 0 285 330"
        backgroundColor="#f5f5f5"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="0" rx="8" ry="8" width="270" height="200" />
        <rect x="2" y="212" rx="8" ry="8" width="100" height="19" />
        <rect x="2" y="238" rx="8" ry="8" width="73" height="12" />
        <rect x="2" y="258" rx="8" ry="8" width="200" height="22" />
      </ContentLoader>
    </div>
  );
}

const OfferLoader = memo(OfferLoader_);

export default OfferLoader;
