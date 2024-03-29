import Header from '../../components/header/header.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import {useParams} from 'react-router-dom';
import {getOfferFullInfo, getOffersShortInfo} from '../../mocks/offers.ts';
import NotFound from '../not-found/not-found.tsx';
import {getCommentsByOfferId} from '../../mocks/comments.ts';
import FavoriteButton from '../../components/favorite-button/favorite-button.tsx';
import Rating from '../../components/rating/rating.tsx';
import {capitalizeFirstLetter} from '../../utils/common.ts';
import Host from '../../components/host/host.tsx';
import Review from '../../components/review/review.tsx';
import FormReview from '../../components/form-review/form-review.tsx';
import {AuthorizationStatus, CITIES} from '../../const.ts';
import Map from '../../components/map/map.tsx';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import {useActionCreators} from '../../hooks/store.ts';
import {offersActions} from '../../store/slices/offers.ts';

interface OfferProps {
  title?: string;
  userAuth: AuthorizationStatus;
}

function Offer({title = 'Offer', userAuth}: OfferProps) {
  useDocumentTitle(title);
  const {setActiveOffer} = useActionCreators(offersActions);

  const {offerId} = useParams();

  if (!offerId) {
    return <NotFound />;
  }

  const offer = getOfferFullInfo(offerId);

  if (!offer) {
    return <NotFound />;
  }

  const comments = getCommentsByOfferId(offerId);
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
    id,
  } = offer;

  const cityFullInfo = CITIES.find((cityItem) => cityItem.name === city.name);
  const nearOffers = getOffersShortInfo().filter((offerItem) => offerItem.id !== id);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
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
                  {offer.title}
                </h1>
                <FavoriteButton componentType={'offer'} isFavorite={isFavorite} />
              </div>
              <Rating componentType={'offer'} rating={rating} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
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
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ul className="reviews__list">
                  {
                    comments.length > 0 &&
                    comments.map((comment) => <Review key={comment.id} review={comment} />
                    )
                  }
                </ul>
                {userAuth === AuthorizationStatus.Auth && <FormReview/>}
              </section>
            </div>
          </div>
          {cityFullInfo && <Map container="offer" city={cityFullInfo} offers={nearOffers}/>}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((nearOffer) =>
                (
                  <OfferCard
                    key={nearOffer.id}
                    offer={nearOffer}
                    componentType="near-places"
                    hoverHandler={() => setActiveOffer(nearOffer)}
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
