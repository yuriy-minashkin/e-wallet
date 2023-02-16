import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import Icons from 'images/icons.svg';
import { Container, LogoutWrapper, User, Button, Icon } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <Container>
      <Link to="/"><Logo /></Link>
      <LogoutWrapper>
        <User>{userName}</User>
        <Button href="#" onClick={() => dispatch(logOut())}>
          <Icon>
            <use href={`${Icons}#icon-exit`} />
          </Icon>
          exit
        </Button>
      </LogoutWrapper>
    </Container>
  );
  
}