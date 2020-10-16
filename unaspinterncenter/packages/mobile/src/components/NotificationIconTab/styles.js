import styled from 'styled-components/native'

export const Button = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`
export const Notifications = styled.Text`
  border-radius: 20px;
  width: 20px;
  height: 20px;
  background: #e14545;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  position: absolute;
  top: 1px;
  right: -1px;
  text-align: center;
`
