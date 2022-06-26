import React from "react";
// @components
import {Logo} from "@components/logo";
// @mui/material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// @react-icons
import {BiUser} from "react-icons/bi"
import {RiMenu3Fill} from "react-icons/ri"

export const Header: React.FC = () => {
    let menuData = [
        {id: 1, title: "منو", hasIcon: <RiMenu3Fill style={{marginLeft: 4}}/>},
        {id: 2, title: "قیمت لحظهای", hasIcon: null},
        {id: 2, title: "سفارشات", hasIcon: null},
        {id: 2, title: "کاردمزدها", hasIcon: null},
        {id: 2, title: "پورتفوی", hasIcon: null}
    ]
    return (
        <Box sx={{background: "#fafafa", p: 0.3}}>
            <Container maxWidth={"lg"}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }} data-testid="container">
                    <Stack direction={"row"} spacing={"5px"}>
                        {menuData.map((menu, index) => (
                            <MenuItem sx={{color: "#212121"}} key={menu.id + index}>
                                {menu.hasIcon}
                                {menu.title}
                            </MenuItem>
                        ))}
                    </Stack>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2
                    }}>
                        <Button startIcon={<BiUser fontSize={20}/>} sx={{py: 1, px: 2}} variant={"contained"}
                                color={"secondary"}>
                            علیرضا اکبرزاده
                        </Button>
                        <Divider orientation="vertical" flexItem sx={{height: "30px", marginTop: 1.4}}/>
                        <Logo/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
