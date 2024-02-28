import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <h1>Ошибка 404. <br/>Страница не найдена 😕</h1>
      <Link to="/" className=""> {'<- Вернуться на главную страницу'}</Link>
    </div>
  );
}

export default NotFound;
