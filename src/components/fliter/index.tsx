// @react
import React from "react";
// @mui/material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// @react-icons
import {BiStar} from "react-icons/bi"
import {VscSearch} from "react-icons/vsc"
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export const Filter: React.FC = () => {
    const [sort, setSort] = React.useState<string>('');
    const [currentCurrency, setCurrentCurrency] = React.useState<string>('تومان');

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };
    return (
        <Stack mt={4} direction="row" spacing={5} alignItems={"center"} justifyContent={"center"}>
            <TextField
                sx={{minWidth: 350}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <VscSearch fontSize={22}/>
                        </InputAdornment>
                    ),
                }}
                color={"secondary"}
                id="demo-helper-text-aligned"
                label="جستجو"
            />
            <Box sx={{minWidth: 150}}>
                <Button sx={{p:2}} fullWidth variant={"outlined"} color={"inherit"} startIcon={<BiStar/>}>
                    نشان شده ها
                </Button>
            </Box>
            <FormControl sx={{minWidth: 190}}>
                <Select
                    value={sort}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                >
                    <MenuItem value="">
                        کمترین قیمت
                    </MenuItem>
                    <MenuItem value={10}>بیشترین قیمت</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{
                display: "flex",
                width: "100%",
                gap: "1px",
                border: "1px solid rgba(0,0,0,0.1)",
                p: 0.6,
                borderRadius: 1
            }}>
                <Button size={"medium"} sx={{p: 1.2}} onClick={() => setCurrentCurrency("تومان")} fullWidth
                        variant={currentCurrency === "تومان" ? "contained" : "text"} color={"secondary"}>
                    تومان
                </Button>
                <Button size={"medium"} sx={{p: 1.2}} onClick={() => setCurrentCurrency("تتر")} fullWidth
                        variant={currentCurrency === "تتر" ? "contained" : "text"} color={"secondary"}>
                    تتر
                </Button>
            </Box>
        </Stack>
    );
};
