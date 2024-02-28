import {Link} from 'react-router-dom';
import styles from './not-found.module.css';
import {classNames} from '../../utils/class-names/class-names.ts';

function NotFound() {
  return (
    <div className={classNames('page page--gray page--main', styles.container)}>
      <h1>Ошибка 404. <br/>Страница не найдена 😕</h1>
      <Link to="/" className=""> {'<- Вернуться на главную страницу'}</Link>
    </div>
  );
}

export default NotFound;
