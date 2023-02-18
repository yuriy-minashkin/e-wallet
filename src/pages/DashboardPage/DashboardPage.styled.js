import styled from 'styled-components';
import bgImageDesk from 'images/dashboardBackGround/bg-overlay-blured-desk.png';
import bgImageTab from 'images/dashboardBackGround/bg-overlay-blured-tab.png';

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--main-background-color);
  @media screen and (min-width: 768px) {
    background: url(${bgImageTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: 1280px) {
    background: url(${bgImageDesk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 69px 63px 0;
  position: relative;
  &::after {
    content: '';
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    border: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    position: absolute;
  }
`;

export const NavBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
