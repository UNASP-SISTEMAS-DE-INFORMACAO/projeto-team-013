import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 2}px;
  height: 55px;
  background: ${props => props.theme.colors.primary};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  bottom: ${props => props.theme.metrics.basePadding}px;
`

export const Text = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`
