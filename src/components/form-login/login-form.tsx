import React, {useState} from 'react';
import {useActionCreators} from '../../hooks/store.ts';
import {userActions} from '../../store/slices/user.ts';
import {toast} from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useActionCreators(userActions);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(login({email, password}).unwrap(), {
      pending: 'Loading',
    });
  };

  return (
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
          type="email"
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
  );
}

export default LoginForm;
