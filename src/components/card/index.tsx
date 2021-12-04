import React, { useState, useEffect } from 'react';

import { useWindowDimensions } from '../../hook/windowDimensions';
import { Breakpoints } from '../../styles/breakpoints';
import {
  Container,
  Title,
  BannerManga,
  Description,
  BoxDescription,
} from './styles';

export type CardProps = {
  title: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, image, description }) => {
  const [smallDescription, setSmallDescription] = useState<string>('');
  const { width } = useWindowDimensions();

  const wordReducer = (): number | undefined => {
    if (width <= Breakpoints.MOBILEM) {
      return 266;
    }
    if (width <= Breakpoints.MOBILEL) {
      return 350;
    }
    if (width >= Breakpoints.MOBILEL + 1 && width <= Breakpoints.TABLET) {
      return 350;
    }
    if (width >= Breakpoints.TABLET + 1 && width <= Breakpoints.LAPTOP) {
      return 700;
    }
    return 1100;
  };

  useEffect(() => {
    let descriptionReducer = description.substring(0, wordReducer());
    descriptionReducer =
      descriptionReducer.length >= description.length
        ? descriptionReducer
        : descriptionReducer.concat(' ...');
    setSmallDescription(descriptionReducer);
  }, [width]);

  return (
    <Container>
      <Title>{title}</Title>
      <BannerManga src={image} />
      <BoxDescription>
        <Description>{smallDescription}</Description>
      </BoxDescription>
    </Container>
  );
};
export default Card;
