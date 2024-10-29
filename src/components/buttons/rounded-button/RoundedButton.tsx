import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

interface RoundedButtonProps extends ButtonProps {
  loading?: boolean;
}

const StyledButton = styled(Button)(() => ({
  borderRadius: '50px',
  padding: '8px 16px',
  textTransform: 'none',
  boxShadow: 'none', 
  border: '2px solid',
  '&:hover': {
    boxShadow: 'none',
  },
}));

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, loading, ...props }) => {
  return (
    <StyledButton
      {...props}
      disabled={loading || props.disabled} 
      endIcon={loading ? <CircularProgress size={20} color="inherit" /> : props.endIcon}
    >
      {children}
    </StyledButton>
  );
};

export default RoundedButton;