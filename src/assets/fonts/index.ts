import GabrielaRegular from './Gabriela/Gabriela-Regular.ttf';
import MontserratBold from './Montserrat/Montserrat-Bold.ttf';
import MontserratRegular from './Montserrat/Montserrat-Regular.ttf';

export const Fonts = `
  @font-face {
    font-family: 'Montserrat-Bold';
    src: local('Montserrat'), url(${MontserratBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${MontserratRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gabriela';
    src: local('Gabriela'), url(${GabrielaRegular}) format('truetype');
    font-weight: 400;
  }

`;
