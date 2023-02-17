import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: 'transparent';
  gap: 5px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Box = styled.section`
  max-height: 676px;
  width: 280px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 768px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const StatisticsTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--title-main-color);
  margin-bottom: 8px;
  margin-left: 20px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-bottom: 20px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    margin-left: 84px;
    margin-top: 32px;
  }
`;
