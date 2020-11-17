import styled from 'styled-components/native'

export const Container = styled.Modal``

export const Content = styled.View`
  flex: 1;
  align-items: center;
  background: #000;
`

export const Loading = styled.ActivityIndicator`
  margin-top: ${props => props.theme.metrics.screenHeight / 2 - 30}px;
`
