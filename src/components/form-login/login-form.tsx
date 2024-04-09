import React, {useState} from 'react';
import {useActionCreators} from '../../hooks/store.ts';
import {userActions} from '../../store/slices/user.ts';
import {toast} from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useActionCreators(userActions);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).*$/;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast.error('Введен неверный email');
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error('Пароль должен содержать хотя бы одну букву и одну цифру');
      return;
    }
    toast.promise(login({email, password}).unwrap(), {
      pending: 'Loading',
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="login__form form"
        action="#"
        method="post"
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            onChange={(evt) => setEmail(evt.target.value)}
            className="login__input form__input"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            onChange={(evt) => setPassword(evt.target.value)}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >
        Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
