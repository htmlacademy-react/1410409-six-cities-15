import {Link} from 'react-router-dom';
import styles from './not-found.module.css';
import Logo from '../../components/logo/logo.tsx';

function NotFound() {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.container}>
        <h1>Ошибка 404. <br/>Страница не найдена 😕</h1>
        <Link to="/" className="locations__item-link"> {'<- Вернуться на главную страницу'}</Link>
      </main>
    </div>
  );
}

export default NotFound;
