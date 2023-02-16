import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--title-main-color);
  text-decoration: none;
  &.active {
    font-weight: 700;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p``;
