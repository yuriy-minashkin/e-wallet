import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Main, Container, SidebarWrapper, NavBalanceWrapper } from './DashboardPage.styled';

export const DashboardPage = () => {
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <>
      <Header />
      <Main>
          <Container>
          <SidebarWrapper>
            <NavBalanceWrapper>
              <Navigation />
              <Balance />
            </NavBalanceWrapper>
            {isTablet && <Currency />}
          </SidebarWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};