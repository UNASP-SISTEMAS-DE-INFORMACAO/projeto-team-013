import styled from 'styled-components/native'

export const Container = styled.View`
  background: ${props => props.theme.colors.white};
  flex: 1;
`
export const BackgroundHeader = styled.View`
  position: absolute;
  width: 100%;
  height: 369px;
  top: 0px;
  background-color: ${props => props.theme.colors.primary};
  border-bottom-left-radius: ${props => props.theme.metrics.baseRadius}px;
  border-bottom-right-radius: ${props => props.theme.metrics.baseRadius}px;
`
export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`
export const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`
export const BackButton = styled.TouchableOpacity``

export const InputContainer = styled.View`
  justify-content: space-between;
  flex-direction: column;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`
export const DadosPassword = styled.View`
  justify-content: space-between;
  flex-direction: column;
`
export const InputContainerPass = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`
export const Label = styled.Text`
  font-size: 14px;
  color: #dddddd;
`
export const Input = styled.TextInput`
  font-size: 16px;
  color: #fff;
`
export const Exit = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`
export const ButtomExit = styled.Text`
  color: #333333;
  font-size: 16px;
  text-align: center;
`
