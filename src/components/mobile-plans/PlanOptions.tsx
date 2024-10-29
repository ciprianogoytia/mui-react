import React from 'react'
import SelectableButtons from '../form-fields/ButtonSelectFormField'
import { useFormContext } from 'react-hook-form'
import { Box, Typography } from '@mui/material';

interface PlanOptionsProps {
  label: string;
  name: string
}

const PlanOptions: React.FC<PlanOptionsProps> = ({label, name}) => {
  const {control} = useFormContext();
  return (
    <Box>
      <Typography variant='h4' mb={2}>{label}</Typography>
      <SelectableButtons
        control={control}
        name={`${name}.plan`}
        options={[
          {label: 'Basic', value: 'basic'},
          {label: 'Standard', value: 'standard'},
          {label: 'Deluxe', value: 'deluxe'}
        ]}
      />
    </Box>
  )
}

export default PlanOptions