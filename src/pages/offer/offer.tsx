import Header from '../../components/header/header.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found.tsx';
import FavoriteButton from '../../components/favorite-button/favorite-button.tsx';
import Rating from '../../components/rating/rating.tsx';
import {capitalizeFirstLetter} from '../../utils/common.ts';
import Host from '../../components/host/host.tsx';
import {CITIES, RequestStatus} from '../../const.ts';
import Map from '../../components/map/map.tsx';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {useEffect} from 'react';
import {offerFullInfoActions, offerFullInfoSelectors} from '../../store/slices/offer-full-info.ts';
import {offersNearActions, offersNearSelectors} from '../../store/slices/offers-near.ts';
import Loader from '../../components/loader/loader.tsx';
import CommentsSection from '../../components/comments-section/comments-section.tsx';

interface OfferProps {
  title?: string;
}

const MAX_COUNT_IMAGES = 6;
const MAX_COUNT_NEAR_OFFERS = 3;

function Offer({title = 'Offer'}: OfferProps) {
  useDocumentTitle(title);
  const {fetchOfferFullInfo} = useActionCreators(offerFullInfoActions);
  const {fetchOffersNear} = useActionCreators(offersNearActions);
  const loadOfferInfoStatus = useAppSelector(offerFullInfoSelectors.status);


  const {offerId} = useParams();

  useEffect(() => {
    if (offerId) {
      fetchOfferFullInfo(offerId);
      fetchOffersNear(offerId);
    }
  }, [fetchOfferFullInfo, fetchOffersNear, offerId]);

  const offerFullInfo = useAppSelector(offerFullInfoSelectors.offerFullInfo);
  const offersNear = useAppSelector(offersNearSelectors.offersNear).slice(0, MAX_COUNT_NEAR_OFFERS);

  if (loadOfferInfoStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (loadOfferInfoStatus === RequestStatus.Failed || !offerFullInfo) {
    return <NotFound />;
  }
  const slicedOffersNearWithCurrent = [...offersNear, offerFullInfo];

  const {
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
  } = offerFullInfo;

  const cityFullInfo = CITIES.find((cityItem) => cityItem.name === city.name);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.slice(0, MAX_COUNT_IMAGES).map((image) => (
                  <div key={image} className="offer__image-wrapper">
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerFullInfo.title}
                </h1>
                <FavoriteButton offerId={offerId!} componentType={'offer'} isFavorite={isFavorite} />
              </div>
              <Rating componentType={'offer'} rating={rating} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults} adult${maxAdults > 1 ? 's' : ''}`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li
                      key={good}
                      className="offer__inside-item"
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <Host host={host} description={description} />
              <CommentsSection offerId={offerId} />
            </div>
          </div>
          {cityFullInfo && <Map container="offer" city={cityFullInfo} currentOfferId={offerId} offers={slicedOffersNearWithCurrent}/>}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNear.map((nearOffer) =>
                (
                  <OfferCard
                    key={nearOffer.id}
                    offer={nearOffer}
                    componentType="near-places"
                  />
                )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
