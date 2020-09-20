import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  height: 93px;
  width: 93px;
  margin-top: 0px;
`

export const Header = styled.View`
  width: 95%;
  height: 60%;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.metrics.basePadding}px;
`

export const WelcomeText = styled.Text`
  color: ${props => props.theme.colors.black};
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`

export const WelcomeTextCentral = styled.Text`
  color: ${props => props.theme.colors.black};
  font-size: 17px;
  text-align: center;
  margin-top: 35px;
`

export const ButtomNovo = styled.TouchableOpacity`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 2}px;
  height: 55px;
  background: ${props => props.theme.colors.primary};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

export const ButtomText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`
