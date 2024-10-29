import React from 'react';
import { Box, Button, InputLabel, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface Option {
  label?: string;
  value: string;
}

interface ButtonSelectFormFieldProps {
  options: Option[];
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  label?: string;
}

const ButtonSelectFormField: React.FC<ButtonSelectFormFieldProps> = ({ options, name, control, defaultValue, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <Box>
          {label && <InputLabel sx={{mb: 1}}>{label}</InputLabel>}
          <Stack direction="row" spacing={2}>
            {options.map((option) => (
              <Button
                size="small"
                key={option.value}
                variant={field.value === option.value ? 'contained' : 'outlined'}
                color={field.value === option.value ? 'primary' : 'secondary'}
                onClick={() => {
                  field.onChange(option.value);
                }}
                startIcon={field.value === option.value ? <CheckIcon /> : null}
              >
                {option.label}
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    />
  );
};

export default ButtonSelectFormField;