import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1280px;
  background-color: var(--main-background-color);
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
