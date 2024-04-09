import Logo from '../../components/logo/logo.tsx';
import {useDocumentTitle} from '../../hooks/document-title.ts';
import LoginForm from '../../components/form-login/login-form.tsx';
import LoginCityLink from '../../components/login-city-link/login-city-link.tsx';

interface LoginProps {
  title?: string;
}

function Login({title = 'Login'}: LoginProps) {
  useDocumentTitle(title);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <LoginCityLink />
        </div>
      </main>
    </div>
  );
}

export default Login;
