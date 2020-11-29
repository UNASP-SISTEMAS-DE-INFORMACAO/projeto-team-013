import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 16px;
  margin-right: 16px;
  min-height: 43px;
  align-items: center;
`

export const StepContainer = styled.View`
  align-items: center;
`

export const Step = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${props =>
    props.status ? props.theme.colors.primary : props.theme.colors.regular};
  border-radius: 50px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.white};
`

export const Text = styled.Text`
  font-size: 10px;
  color: #0e395e;
`

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #0e395e10;
  position: absolute;
`
