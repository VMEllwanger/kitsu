import { createGlobalStyle } from 'styled-components';

import { Colors } from './colors';
import { Typography } from './typography';

export const Global = createGlobalStyle`
    ${Typography}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-family: 'Saira', sans-serif;
        background: ${Colors.BACKGROUND};
    }
`;
