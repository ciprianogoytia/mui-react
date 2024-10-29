import React from "react";
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { Controller, Control, FieldValues } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface RadioFormFieldProps {
  control: Control<FieldValues>;
  name: string;
  rules?: object;
  options: Option[];
  isRow?: boolean;
  label?: string;
}

const RadioFormField: React.FC<RadioFormFieldProps> = ({
  control,
  name,
  rules = {},
  options = [],
  isRow = false,
  label
}) => {
  return (
    <FormControl>
      {label && (
        <FormLabel component="legend">{label}</FormLabel>
      )}
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({ field }) => (
            <RadioGroup {...field} sx={{ flexDirection: isRow ? "row" : "column" }}>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          )}
      />
    </FormControl>
  );
};

export default RadioFormField;