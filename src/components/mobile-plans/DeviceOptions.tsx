import { Box, Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import SelectFormField from '../form-fields/SelectFormField';
import devices from '../../mock/device-mock.json'
import { Phone } from '../../types/devices';
import ColorSelectFormField from '../form-fields/ColorSelectFormField';
import ButtonSelectFormField from '../form-fields/ButtonSelectFormField';
import RadioFormField from '../form-fields/RadioFormField';

interface DeviceOptionsProps {
  label: string;
  name: string;
}

const DeviceOptions: React.FC<DeviceOptionsProps> = ({label, name}) => {
  const {control, watch} = useFormContext();
  const selectedManufacturer = watch(`${name}.manufacturer`);
  const manufacturers: Record<string, Phone[]> = devices;
  const selectedDevice = manufacturers[selectedManufacturer] ? manufacturers[selectedManufacturer] : [];
  const selectedPhone = watch(`${name}.phone`);
  const colorOptions = selectedDevice.find((phone) => phone.name === selectedPhone)?.colors || [];
  const storageOptions = selectedDevice.find((phone) => phone.name === selectedPhone)?.storage || [];

  return (
    <Box>
      <Typography variant='h4' mb={2}>{label}</Typography>
      <Stack direction="row" spacing={4} mb={3}>
        <SelectFormField 
          label="Select Manufacturer *"
          options={Object.keys(devices)}
          control={control}
          name={`${name}.manufacturer`}
          rules={{required: 'Manufacturer is required'}}
          sx={{width: '240px'}}
        />
        {selectedManufacturer && (
          <SelectFormField
            label="Select Phone *"
            options={selectedDevice.map((phone) => phone.name)}
            control={control}
            defaultValue="iPhone 12"
            name={`${name}.phone`}
            rules={{required: 'Phone is required'}}
            sx={{width: '240px'}}
          />
        )}
        {selectedPhone && (
          <ColorSelectFormField 
            label="Color"
            colors={colorOptions.map((color) => ({color: color.hex, label: color.name}))}
            control={control}
            name={`${name}.color`}
          />
        )}
      </Stack>
      {selectedPhone && (
        <Stack direction="row" spacing={4}>
          <ButtonSelectFormField 
            label="Storage"
            options={storageOptions.map(size => ({label: size, value: size}))}
            control={control}
            name={`${name}.storage`}
          />
          <ButtonSelectFormField
            label="Payment Plan"
            options={[
              {label: 'Installments', value: 'installments'},
              {label: 'Pay in Full', value: 'payInFull'}
            ]}
            control={control}
            name={`${name}.paymentPlan`}
          />
        </Stack>
      )}
      {selectedPhone && (
        <Box mt={3}>
          <RadioFormField 
            label="Protect Plan"
            options={[
              {label: "Add Protection Plan", value: "addProtectionPlan"},
              {label: "Decline Protection Plan", value: "declineProtectionPlan"}
            ]}
            name={`${name}.protectPlan`}
            control={control}
            isRow
          />
        </Box>
      )}
    </Box>
  )
}

export default DeviceOptions