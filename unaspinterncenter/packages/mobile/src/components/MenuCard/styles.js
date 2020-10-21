import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 134px;
  height: 150px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  border-width: 1px;
  border-color: #dedede;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`

export const Title = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin: 16px;
`
