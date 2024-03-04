import type {Host, OfferFullInfo} from '../../types/offer.ts';
import {classNames} from '../../utils/class-names/class-names.ts';

interface HostProps {
  host: Host;
  description: OfferFullInfo['description'];
}

function Host({host, description}: HostProps) {
  const {
    name,
    avatarUrl,
    isPro,
  } = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={
            classNames('offer__avatar-wrapper user__avatar-wrapper', isPro && 'offer__avatar-wrapper--pro')
          }
        >
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        {isPro && (
          <span className="offer__user-status">
          Pro
          </span>
        )}
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Host;

