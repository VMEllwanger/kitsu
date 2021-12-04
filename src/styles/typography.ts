import { css } from 'styled-components';

import { Fonts } from '../assets/fonts';

export const Typography = css`
  ${Fonts}

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2.4rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    font-family: 'Montserrat', sans-serif;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
  }

  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Gabriela', serif;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration-line: underline;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    line-height: 100%;
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 24px;
      line-height: 36px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 14px;
      line-height: 21px;
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 21px;
      line-height: 31px;
    }

    p {
      font-size: 15px;
    }

    a {
      font-size: 13px;
      line-height: 19px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 27px;
    }

    p {
      font-size: 14px;
    }

    a {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
