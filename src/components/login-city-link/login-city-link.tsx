import {getRandomElement} from '../../utils/common.ts';
import {CITIES} from '../../const.ts';
import {Link} from 'react-router-dom';

function LoginCityLink() {
  const randomCity = getRandomElement(CITIES);

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link to={`/${randomCity.slug}`} className="locations__item-link">
          <span>{randomCity.name}</span>
        </Link>
      </div>
    </section>
  );
}

export default LoginCityLink;
