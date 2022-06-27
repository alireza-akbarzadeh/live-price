// @react
import React, { useContext } from "react";
// @mui/material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// @react-icons
import { BiStar } from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  CurrencyContext,
  CurrencyContextType,
  IQueryProps,
} from "@context/CurrencyContext";

interface IFilterProps {
  setQuery: (val: IQueryProps) => void;
  query: any;
}

export const Filter: React.FC<IFilterProps> = ({ setQuery, query }) => {
  //@ context
  const { currentCurrency, setCurrentCurrency } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  // @handleSort
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setQuery({
      type: "sort",
      params: event.target.value,
    });
  };

  // @handle-search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      type: "search",
      params: e.target.value,
    });
    // @JSX
  };
  return (
    <Stack
      mt={4}
      direction="row"
      spacing={5}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <TextField
        onChange={handleSearch}
        sx={{ minWidth: 350 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <VscSearch fontSize={22} />
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
            value={query.params}
            label="ترتیب بر اساس"
            onChange={handleChangeSelect}
          >
            <MenuItem value={1}>ییشترین قیمت</MenuItem>
            <MenuItem value={2}>کمترین قیمت</MenuItem>
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
