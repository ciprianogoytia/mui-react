import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import RadioFormField from '../form-fields/RadioFormField';
import { useFormContext } from 'react-hook-form';

const questions = [
  {
    label: 'Is the device free of major physical damage?',
    value: 'freeOfDamage'
  },
  {
    label: 'Does the device have a functional screen?',
    value: 'functionalScreen'
  },
  {
    label: 'Does the device power on?',
    value: 'powerOn'
  }
]

interface DeviceConditionQuestionsProps {
  label: string;
  name: string;
} 

const DeviceConditionQuestions: React.FC<DeviceConditionQuestionsProps> = ({
  label,
  name
}) => {
  const {control} = useFormContext();
  return (
    <Box>
      <Typography variant='h4' id='device-condition-question' mb={2}>{label}</Typography>
      <List>
        {questions.map((question) => (
          <ListItem 
            key={question.value}
            sx={{
              display: 'block',
              '&:nth-of-type(odd)': {
                backgroundColor: 'action.hover',
              },
              '&:last-child td, &:last-child th': {
                border: 0,
              },
            }}
            secondaryAction={
              <RadioFormField 
                name={`${name}.questions.${question.value}`}
                control={control}
                options={[
                  {label: 'Yes', value: 'yes'},
                  {label: 'No', value: 'no'}
                ]}
                isRow
              />
            }
          >
            <ListItemText
              primary={question.label}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default DeviceConditionQuestions