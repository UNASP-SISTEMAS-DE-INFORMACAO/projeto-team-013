import React from 'react'
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

import { Container, Step, StepContainer, Line, Text } from './styles'

const steps = [
  {
    text: 'Enviado',
    type: 'sent'
  },
  {
    text: 'Em analise',
    type: 'analyzing'
  },
  {
    text: 'aprovado',
    type: 'approved'
  }
]

const ProgressWithStep = ({ currentStep }) => {
  return (
    <Container>
      <Line />
      {steps.map(step => (
        <StepContainer key={step.type}>
          <Step status={step.type === currentStep} />
          <Text>{step.text}</Text>
        </StepContainer>
      ))}
    </Container>
  )
}

export default ProgressWithStep
