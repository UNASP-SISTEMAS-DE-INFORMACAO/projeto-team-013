import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

import { Container, Step, Text } from './styles'

const ProgressWithStep = () => {
  return (
    <Container>
      <ProgressSteps>
        <ProgressStep label="First Step">
          <Step>
            <Text>This is the content within step 1!</Text>
          </Step>
        </ProgressStep>
        <ProgressStep label="Second Step">
          <Step>
            <Text>This is the content within step 2!</Text>
          </Step>
        </ProgressStep>
        <ProgressStep label="Third Step">
          <Step>
            <Text>This is the content within step 3!</Text>
          </Step>
        </ProgressStep>
      </ProgressSteps>
    </Container>
  )
}

export default ProgressWithStep
