import React from "react";
import { Box, InputLabel, SxProps, TextField } from "@mui/material";
import { Controller, Control, FieldValues, FieldError } from "react-hook-form";

interface TextFormFieldProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  rules?: object;
  placeholder?:string;
  error?: FieldError;
  sx?: SxProps;
}

const TextFormField: React.FC<TextFormFieldProps> = ({
  control,
  name,
  label,
  rules = {},
  error,
  sx,
  placeholder,
  ...props
}) => {
  return (
    <Box>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            sx={sx}
            error={!!error}
            helperText={error?.message}
            placeholder={placeholder}
            size="small"
            {...props}
          />
        )}
      />
    </Box>
  );
};

export default TextFormField;