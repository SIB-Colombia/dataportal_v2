import {reversePalette} from 'styled-theme/composer';

const theme = {};

theme.palette = {
  primary: ['#EF7748'],
  secondary: ['#009CB0'],
  option: ['white'],
  grayscale: [
    '#f2f2f2',
    '#e6e6e6',
    '#cccccc',
    '#b3b3b3',
    '#999999',
    '#666666',
    '#333333',
    '#222222'
  ],
  basescale: [
    '#e2e7e7',
    '#59a8b7',
    '#498893',
    '#316971',
    '#00282b',
    '#e8774b',
    '#465252',
    '#f44336',
    '#ff9800',
    '#795548',
    '#77A7B6',
    '#FF6518'
  ],
  text: ['#465252']
}

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: 'Open Sans, sans-serif',
  lg: '28pt',
  md: '22pt',
  sm: '18pt',
  xs: '16pt',
  xxs: '14pt'
}

theme.sizes = {
  xs: '(max-width:48em)',
  sm: '(min-width:48em) and (max-width:64em)',
  md: '(min-width:64em) and (max-width:75em)',
  lg: '(min-width:75em)'
}

export default theme;
