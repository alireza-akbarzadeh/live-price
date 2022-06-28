// @react
import React, { useContext, useTransition } from "react";
// @mui/material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
// @react-icons
import { BiStar } from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";

import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";
// @Interface
interface IFilterProps {
  setQuery: (val: string) => void;
  setPageNumber: (val: number) => void;
  setSearch: (val: string) => void;
  setSort: (val: string) => void;
  sort: string;
}
export const Filter: React.FC<IFilterProps> = ({
  setPageNumber,
  setSearch,
  setSort,
  sort,
}) => {
  const [pending, startTransition] = useTransition();
  //@ context
  const { currentCurrency, setCurrentCurrency, setQueryType } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  // @handleSort
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    setQueryType("sort");
    setPageNumber(1);
  };
  // @handle-search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setSearch(e.target.value));
    setQueryType("search");
    setPageNumber(1);
  };
  // @JSX
  return (
    <Stack
      mt={4}
      direction="row"
      spacing={5}
      sx={{ md: { flexDirection: "column" }, lg: { flexDirection: "row" } }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <TextField
        onChange={handleSearch}
        sx={{ minWidth: 350 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {pending ? (
                <CircularProgress
                  sx={{ width: 15, height: 15 }}
                  color="secondary"
                />
              ) : (
                <VscSearch fontSize={22} />
              )}
            </InputAdornment>
          ),
        }}
        color={"secondary"}
        id="demo-helper-text-aligned"
        label="جستجو"
      />
      <Box sx={{ minWidth: 150 }}>
        <Button
          sx={{ p: 2 }}
          fullWidth
          variant={"outlined"}
          color={"inherit"}
          startIcon={<BiStar />}
        >
          نشان شده ها
        </Button>
      </Box>
      <Box sx={{ minWidth: 180 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ترتیب بر اساس</InputLabel>
          <Select
            color={"success"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="ترتیب بر اساس"
            onChange={handleChangeSelect}
          >
            <MenuItem value={2}>ییشترین قیمت</MenuItem>
            <MenuItem value={1}>کمترین قیمت</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "1px",
          border: "1px solid rgba(0,0,0,0.1)",
          p: 0.6,
          borderRadius: 1,
        }}
      >
        <Button
          size={"medium"}
          sx={{ p: 1.2 }}
          onClick={() => setCurrentCurrency("تومان")}
          fullWidth
          variant={currentCurrency === "تومان" ? "contained" : "text"}
          color={"secondary"}
        >
          تومان
        </Button>
        <Button
          size={"medium"}
          sx={{ p: 1.2 }}
          onClick={() => setCurrentCurrency("تتر")}
          fullWidth
          variant={currentCurrency === "تتر" ? "contained" : "text"}
          color={"secondary"}
        >
          تتر
        </Button>
      </Box>
    </Stack>
  );
};
