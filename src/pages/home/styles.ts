import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Breakpoints } from '../../styles/breakpoints';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${Colors.BACKGROUND};
`;

export const RenderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  background: ${Colors.BACKGROUND};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  height: 80px;
  padding: 12px;

  @media (min-width: ${Breakpoints.TABLET}px) {
    max-width: 1100px;
    padding: 12px;
  }
`;

export const PaginationItem = styled(NavLink)`
  display: flex;
  gap: 12px;
  color: white;
  font-size: 14px;
  line-height: 21px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    font-size: 18px;
  }
`;
