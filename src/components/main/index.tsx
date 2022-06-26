import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {Filter} from "@components/fliter";

const StyledBadge = styled(Typography)(({theme}) => ({
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
export const Main: React.FC = () => {
    return (
        <Box mt={5}>
            <Container maxWidth={"lg"}>
                <Paper sx={{padding: "20px 20px", borderRadius: 2.3}} elevation={2}>
                    <Box sx={{display: "flex", alignItems: "center", gap: 5}}>
                        <Typography variant={"h4"}>قیمت لحظهای</Typography>
                        <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
                            <StyledBadge/>
                            <Typography variant={"body1"}>296 ارز دیجیتا</Typography>
                        </Box>
                    </Box>
                    <Filter/>
                </Paper>
            </Container>
        </Box>
    );
};
