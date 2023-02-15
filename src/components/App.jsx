import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, PublicRoute } from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import { selectIsRefreshing, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DiagramPage = lazy(() => import('pages/DiagramPage/DiagramPage'));

const App = () => {
  const dispatch = useDispatch();
  const userRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return userRefreshing ? ( <div>Loading...</div>) : (
     <Routes>
          <Route path="/register" element={<PublicRoute component={<RegistrationPage />} />} />
          <Route path="/login"  element={<PublicRoute component={<LoginPage />} />} />
          <Route path="/" element={<PrivateRoute component={<DashboardPage />} />} >
            <Route index element={<HomePage />} />
            <Route path="diagram" element={<DiagramPage />} />
          </Route>
          <Route path="*" element={isLoggedIn ? <DashboardPage /> : <LoginPage />} />
        </Routes>
  );
};

export { App };

