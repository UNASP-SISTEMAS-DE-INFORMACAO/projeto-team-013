import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  min-height: 120px;
  border-bottom-width: 1px;
  border-color: #e7ecef;
`

export const Text = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.colors.primary};
`

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const Description = styled.View``

export const Button = styled.TouchableOpacity``
