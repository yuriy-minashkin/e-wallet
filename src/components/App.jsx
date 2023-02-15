import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoute, PublicRoute } from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? ( <div>Loading...</div>) : (
    <Routes>
          <Route path="/login"  element={<PublicRoute component={<LoginPage />} />} />
          <Route path="/register" element={<PublicRoute component={<RegistrationPage />} />} />
          <Route path="/" element={<PrivateRoute component={<DashboardPage />} />} >
            <Route index element={<HomePage />} />
            <Route path="diagram" element={<SummaryPage />} />
          </Route>
          <Route path="*" element={isLoggedIn ? <DashboardPage /> : <LoginPage />} />
        </Routes>
  );
};

export { App };

