import styled from 'styled-components/native'

export const Container = styled.View``

export const TextInput = styled.TextInput`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 2}px;
  height: 55px;
  padding: ${props => props.theme.metrics.basePadding}px;
  background: ${props => props.theme.colors.white};
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  border: 1px;
  border-color: ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.metrics.baseRadius}px;
`

export const Error = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.danger};
  padding: ${props => props.theme.metrics.basePadding - 8}px;
`
