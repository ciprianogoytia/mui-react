import { Box, Button, Card, CardContent, Collapse, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandButton from '../buttons/expand-button/ExpandButton'
import PlanOptions from './PlanOptions'
import DeviceOptions from './DeviceOptions'
import TradeInOptions from './TradeInOptions'
import DeviceConditionQuestions from './DeviceConditionQuestions'

const formFields = [
  {
    label: "Plan Options",
    component: PlanOptions
  },
  {
    label: "Device Options",
    component: DeviceOptions
  },
  {
    label: "Trade-in Options",
    component: TradeInOptions
  },
  {
    label: "Device Condition Questions",
    component: DeviceConditionQuestions
  }
]

interface MobileLineProps {
  name: string;
  index: number;
}

const MobileLine: React.FC<MobileLineProps> = ({name, index: i}) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleExpand = () => {
    setIsExpanded(prev => !prev)
  }
  return (
    <Card sx={{boxShadow: "0px 5px 9px #d0d2d3", my: 4}}> 
      <CardContent>
        <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mb: isExpanded ? 4 : 0}}>
          <Typography variant='h2'>
            Mobile Line {i + 1}
          </Typography>
          <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
            <Typography variant='h2'>
              $39.99
            </Typography>
            <ExpandButton isExpanded={isExpanded} onClick={handleExpand} />
          </Box>
        </Box>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Box>
              {formFields.map((field, index) => {
                const Component = field.component;
                return (
                  <Box key={index} sx={{mb: 2}}>
                    <Component label={field.label} name={name} index={i} />
                    {index !== formFields.length - 1 && <Divider sx={{my: 4}} />}
                  </Box>
                )
              })}
          </Box>
          <Stack direction="row" spacing={4}>
            <Button>
              Check Trade-in
            </Button>
            <Button>
              Send IMEI Instructions
            </Button>
          </Stack>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default MobileLine