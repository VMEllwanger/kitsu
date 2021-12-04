import styled from 'styled-components';

import { Breakpoints } from '../../styles/breakpoints';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'banner'
    'description';
  grid-template-rows: 1fr 400px 200px;
  gap: 12px;
  box-sizing: border-box;
  max-width: 350px;
  padding: 18px;
  background: radial-gradient(50% 50% at 50% 50%, #3f444f 0%, #32363f 100%);
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);

  @media (min-width: ${Breakpoints.TABLET}px) {
    grid-template-areas:
      'banner title'
      'banner description';
    grid-template-rows: 25px 1fr;
    grid-template-columns: 250px 1fr;
    max-width: 1100px;
    max-height: 365px;
    padding: 24px;
  }
`;

export const Title = styled.h2`
  display: flex;
  grid-area: title;
  align-items: center;
  justify-content: center;
  color: ${Colors.PRIMARY};
  font-weight: 500;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.225em;
  text-align: center;

  @media (min-width: ${Breakpoints.TABLET}px) {
    height: max-content;
  }
`;

export const BannerManga = styled.img`
  grid-area: banner;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const BoxDescription = styled.div`
  position: relative;
  grid-area: description;
  padding: 12px;
  background: ${Colors.BACKGROUND_TEXT};
`;

export const Description = styled.p`
  position: relative;
  margin-left: 12px;
  color: ${Colors.WHITE};
  text-align: justify;
  text-indent: 2.5em;

  &:before {
    position: absolute;
    left: -12px;
    width: 4px;
    height: 100%;
    background-color: ${Colors.PRIMARY};
    content: '';
  }
`;
