import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ButtonStyled = styled(Button)(() => ({
  color: "#ffffff",
  textTransform: "capitalize",
  fontSize: "1rem",
  backgroundColor: "#69B1ED",
  "&:hover": {
    backgroundColor: "#4f9cdc",
  },
}));
