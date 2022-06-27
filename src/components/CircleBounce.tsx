import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CircleBounce = styled(Typography)(({theme}) => ({
    '&': {
        position: "relative",
        width: "11px",
        height: "11px",
        borderRadius: "50%",
        backgroundColor: '#fbbd06',
        color: '#fbbd06',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
    '&::after': {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
