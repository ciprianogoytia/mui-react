import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SelectFormField from '../form-fields/SelectFormField'
import { useFormContext } from 'react-hook-form'
import TextFormField from '../form-fields/TextFormField'

interface TradeInOptionsProps {
  label: string;
  name: string;
  index: number;
}

const TradeInOptions: React.FC<TradeInOptionsProps> = ({ label, name, index }) => {
  const {control, formState: {errors}} = useFormContext();
  return (
    <Box>
      <Typography variant='h4' mb={2}>{label}</Typography>
      <Stack direction="row" spacing={4} mb={3}>
        <SelectFormField 
          options={[
            "Google Voice"
          ]}
          control={control}
          name={`${name}.carrier`}
          label="Carrier *"
          rules={{
            required: 'Carrier is required'
          }}
          sx={{width: '240px'}}
        />
        <TextFormField 
          control={control}
          name={`${name}.imei`}
          label="IMEI *"
          placeholder="Enter IMEI Number"
          rules={{
            required: 'IMEI is required'
          }}
          sx={{width: '240px'}}
          error={errors?.mobileLines?.[index]?.imei}
        />
      </Stack>
    </Box>
  )
}

export default TradeInOptions