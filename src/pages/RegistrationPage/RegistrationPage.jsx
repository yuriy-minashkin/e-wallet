import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirm] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordConfirmation':
        return setPasswordConfirm(value);
      default:
        break;
    }
  };
  const data = useSelector(state => state);
  console.log(data);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        // passwordConfirmation: form.elements.passwordConfirmation.value,
      })
    );

    form.reset();
    // dispatch(register({ username, email, password, passwordConfirmation }));

    // setName('');
    // setEmail('');
    // setPassword('');
    // setPasswordConfirm('');
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Adrian Cross"
          value={username}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="example@mail.com"
          value={email}
          onChange={handleChange}
        />
        <label> Password</label>
        <input
          type="password"
          name="password"
          required
          minLength="7"
          value={password}
          onChange={handleChange}
        />
        <label>Confirm password</label>
        <input
          type="password"
          name="passwordConfirmation"
          onChange={handleChange}
          value={passwordConfirmation}
        />
        <button type="submit">Register</button>
        <Link to="/login">
          <button type="submit">Log in</button>
        </Link>
      </form>
    </div>
  );
};
