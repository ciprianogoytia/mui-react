import { Box, Container, Stack } from '@mui/material'
import MobilePlans from './mobile-plans/MobilePlans'
import RoundedButton from '../components/buttons/rounded-button/RoundedButton'
import { FormProvider, useForm } from 'react-hook-form';
import { defaultValue } from '../utils/defaultValue';
import { FormType } from '../types/devices';

const Pages = () => {
  const formContext = useForm<{mobileLines: FormType[]}>({
    defaultValues: {
      mobileLines: [defaultValue]
    }
  });
  const onsubmit = (values: {mobileLines: FormType[]}) => {
    console.log(values)
  }
  return (
    <Container maxWidth="md" sx={{pt: 10}}>
      <FormProvider {...formContext}>
        <Box component="form" onSubmit={formContext.handleSubmit(onsubmit)}>
          <MobilePlans />
          <Stack direction="row" justifyContent="right" spacing={2}>
            <RoundedButton variant="outlined" color="primary" type="button">Back</RoundedButton>
            <RoundedButton variant="outlined" color="primary" type="button">Clear Order</RoundedButton>
            <RoundedButton variant="contained" color="primary" type="submit">Next</RoundedButton>
          </Stack>
        </Box>
      </FormProvider>
    </Container>
  )
}

export default Pages