import { Box, Button, Typography } from '@mui/material'
import MobileLine from '../../components/mobile-plans/MobileLine'

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { defaultValue } from '../../utils/defaultValue';

const MobilePlans = () => {
  const { control } = useFormContext();
  const { append, fields } = useFieldArray({
    control,
    name: "mobileLines", 
  });

  const handleAddMobileLine = () => {
    append(defaultValue)
  }
  return (
    <Box>
      <Typography variant="h1" color="textSecondary">Mobile Plans</Typography>
      <Box>
        {fields.map((field, index) => (
          <MobileLine key={field.id} name={`mobileLines.${index}`} index={index} />
        ))}
      </Box>

      <Button
        startIcon={<AddCircleOutlinedIcon />}
        onClick={handleAddMobileLine}
      >Add Another Line</Button>
    </Box>
  )
}

export default MobilePlans