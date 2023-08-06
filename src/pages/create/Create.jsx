import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import "./Create.css";

import { ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  // getContrastText da func gwa al palette gwa theme fe al matrial bndelo color bygble
  // al color al monasb m3ah
  color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  // @ts-ignore
  backgroundColor: theme.palette.abdullah.main,
  "&:hover": {
    // backgroundColor: purple[700],
    // @ts-ignore
    backgroundColor: theme.palette.abdullah.main,
    scale: "0.99",
  },
}));

const Create = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // price = Number(price);
    let title = data.title;
    let price = Number(data.price);
    fetch("http://localhost:9000/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title , price }), // body data type must match "Content-Type" header
    }).then(() => navigate("/"))
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      component="form"
      sx={{ width: "380px" }}
    >
      <TextField
        id="inp"
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          // hena al 5sa2s 2le bytl3 al error mnha kol wa7da leha value , mess
          required: { value: true, message: "Requires field" },
          minLength: { value: 5, message: "minumn length is 5" },
        })}
        // de 2le bt5le color al error lono error
        error={Boolean(errors.title)}
        // hena yzhar al text fe 7alt al condition error
        helperText={
          Boolean(errors.title) && errors.title?.message.toString()
        }
      />

      <TextField
        id="num"
        fullWidth={true}
        label="Amount"
        type="number"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        error={Boolean(errors.price)}
        helperText={
          <span style={{ color: errors.price ? "#d32f2f" : "inherit" }}>
            {Boolean(errors.price) && errors.price?.message.toString()}
          </span>
        }
        {...register("price", {
          required: { value: true, message: "Required filed" },
          min: { value: 5, message: "minumn price is 5" },
          max: { value: 5000, message: "maxmum price is 5000" },
        })}
      />

      <ColorButton
        type="submit"
        sx={{ mt: "22px" }}
        variant="contained"
        endIcon={<ChevronRight />}
        onClick={() => {}}
      >
        Submit
      </ColorButton>
    </Box>
  );
};

export default Create;
