import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: ${props => props.theme.metrics.screenWidth - 32}px;
  height: 87px;
  border-radius: 6px;
  border-width: 2px;
  border-color: #dedede;
  background: ${props => props.theme.colors.white};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
`
export const DescriptionContainer = styled.View``

export const Name = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.colors.primary};
`

export const Button = styled.TouchableOpacity``

export const Icon = styled.Image`
  width: 28px;
  height: 28px;
`
