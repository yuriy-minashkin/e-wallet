import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { Container, LogoutWrapper } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <Container>
      <Link to="/"><Logo /></Link>
          <LogoutWrapper>
            <h3>{userName}</h3>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
          </LogoutWrapper>
    </Container>
  )
}
