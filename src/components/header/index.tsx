import React, { ReactNode } from "react";
// @components
import { Logo } from "@components/logo";
// @mui/material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// @react-icons
import { BiUser } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";
import { useRouter } from "next/router";

interface IHeaderProps {
  id: number;
  title: string;
  link: string;
  hasIcon: ReactNode;
}

export const Header: React.FC = () => {
  const router = useRouter();
  let menuData: IHeaderProps[] = [
    {
      id: 1,
      title: "منو",
      hasIcon: <RiMenu3Fill style={{ marginLeft: 4 }} />,
      link: "/live-price",
    },
    { id: 2, title: "قیمت لحظهای", hasIcon: null, link: "/live-price" },
    { id: 2, title: "سفارشات", hasIcon: null, link: "/live-price" },
    { id: 2, title: "کاردمزدها", hasIcon: null, link: "/live-price" },
    { id: 2, title: "پورتفوی", hasIcon: null, link: "/live-price" },
  ];
  return (
    <Box sx={{ background: "#fafafa", p: 0.3 }}>
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          data-testid='container'
        >
          <Stack direction={"row"} spacing={"5px"}>
            {menuData.map((menu, index) => (
              <MenuItem
                onClick={() => router.push(menu.link)}
                sx={{ color: "#212121" }}
                key={menu.id + index}
              >
                <ListItemIcon>{menu.hasIcon}</ListItemIcon>
                <ListItemText>{menu.title}</ListItemText>
              </MenuItem>
            ))}
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
            }}
          >
            <Button
              startIcon={<BiUser fontSize={20} />}
              sx={{ py: 1, px: 2 }}
              variant={"contained"}
              color={"secondary"}
            >
              علیرضا اکبرزاده
            </Button>
            <Divider
              orientation='vertical'
              flexItem
              sx={{ height: "30px", marginTop: 1.4 }}
            />
            <Logo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
