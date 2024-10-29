import React, { useState } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { Box,InputLabel, Typography } from '@mui/material';

interface ColorOption {
  label: string;
  color: string; 
};


interface ColorSelectFormFieldProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  colors: ColorOption[];
};

const ColorSelectFormField: React.FC<ColorSelectFormFieldProps> = ({ name, label, control, colors }) => {
  const [selectedColorLabel, setSelectedColorLabel] = useState('')
  return (
    <Box>
      <InputLabel>{label} <Typography ml={4} component="span" variant='body2'>{selectedColorLabel}</Typography></InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>  (
            <Box>
              {colors.map((color) => (
                <ColorRadio 
                  radioColor={color.color} 
                  key={color.color}
                  selected={field.value === color.color}
                  onChange={(value) => {
                    setSelectedColorLabel(colors.find(color => color.color === value)?.label || '')
                    field.onChange(value)
                  }}
                />
              ))}
            </Box>
        )}
      />
    </Box>
  );
};

const ColorRadio: React.FC<{ radioColor: string, selected: boolean, onChange: (color: string) => void } > = ({ radioColor, selected, onChange }) => (
  <Box sx={{
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    margin: '2px',
    outlineOffset: '2px', 
    outline: '2px solid',
    backgroundColor: radioColor,
    cursor: 'pointer',
    display: 'inline-block',
    mx: 1,
    outlineColor: selected ? 'primary.main' : 'white'
  }} onClick={() => onChange(radioColor)}></Box>
);

export default ColorSelectFormField;