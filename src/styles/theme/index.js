import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary : '#c24b5a',
    secondary: '#db717f',
    black: '#000000',
    white: '#ffffff',
    borderColor: '#e2e1e1',
    oldPriceColor: '#81879a',
};

export const Logos = {
    headerLogo: '/logo-dark.png',
};

export const Utils = {
    currencySymbol:'$',
};

const theme = createTheme({
    palette : {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
    },
});

export default theme;