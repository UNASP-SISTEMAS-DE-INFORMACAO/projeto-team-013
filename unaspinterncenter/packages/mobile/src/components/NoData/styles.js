import styled from 'styled-components/native'

export const Container = styled.View`
  height: 220px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-top: 10px;
`
