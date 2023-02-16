import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
`;

export const Icon = styled.svg`
  width: 40px;
  height: 40px;
`;

export const Text = styled.p`
  font-family: var(--secondary-font);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: var(--title-main-color);
`;
