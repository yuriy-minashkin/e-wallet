import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    background-color: #E5E5E5;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    height: 100vh;
    background-color: #E5E5E5;
    align-items: center;
    background-image: url('images/dashboardBackGround/Rectangle 3.png');
  }
`;

export const LogInImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin-left: 90px;
    margin-right: 300px;
  }
`;

export const ImageTitle = styled.h2`
  @media screen and (min-width: 768px) {
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #000000;
  }
`;
