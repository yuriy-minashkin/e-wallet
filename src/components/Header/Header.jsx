import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';


export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <header>
      <Link to="/">Home</Link>
          <div>
            <h3>{userName}</h3>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
          </div>
    </header>
  )
}
