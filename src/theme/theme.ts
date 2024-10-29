import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { palette } from "./palette";
import { MuiInputLabel } from './InputLabel'
import { MuiButton } from './Button'
import { MuiRadio } from './Radio'
import { MuiSelect } from './Select'

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiInputLabel,
    MuiButton,
    MuiRadio,
    MuiSelect
  }
})
