/* eslint-disable react/prop-types */
import React from 'react'

import { Container, ProgressItem } from './styles'

const Progress = ({ level = 1 }) => {
  const progress = [0, 1, 2]

  return (
    <Container>
      {progress.map(item => (
        <ProgressItem key={item} status={level === item} />
      ))}
    </Container>
  )
}

export default Progress
