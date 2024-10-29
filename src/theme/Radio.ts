import { Components } from '@mui/material/styles/components';
import { palette } from './palette';

export const MuiRadio: Components['MuiRadio'] = {
  styleOverrides: {
    root: {
      color: palette.primary.main,
    },
  },
};
