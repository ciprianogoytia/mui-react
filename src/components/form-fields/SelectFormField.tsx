import React from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, Control, FieldValues, ControllerProps } from "react-hook-form";
import { Box, SxProps } from "@mui/material";

interface SelectFormFieldProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  defaultValue?: string | number | string[] | undefined;
  options: Array<string | number>;
  error?: {
    message?: string;
  };
  multiple?: boolean;
  rules: ControllerProps['rules'];
  sx?: SxProps;
}

const SelectFormField: React.FC<SelectFormFieldProps> = ({
  name,
  label,
  control,
  defaultValue = "",
  options = [],
  error,
  multiple = false,
  rules,
  sx,
  ...props
}) => {
  const labelId = `${name}-label`;

  return (
    <Box>
      <InputLabel id={labelId}>{label}</InputLabel>
      <FormControl error={!!error} {...props}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field }) => (
            <Select
              labelId={labelId}
              multiple={multiple}
              size="small"
              sx={sx}
              {...field}
            >
              {options.map((option, index) => (
                <MenuItem value={option} key={`${option}-${index}`}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default SelectFormField;