import { Components } from '@mui/material/styles/components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const IconComponent: React.FC = () => (
  <KeyboardArrowDownIcon color="primary" sx={{mr: 2}}/>
)

export const MuiSelect: Components['MuiSelect'] = {
  defaultProps: {
    IconComponent: IconComponent
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    }
  },
};
