import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  background: ${props => props.theme.colors.white};
`

export const Logo = styled.Image`
  height: 93px;
  width: 93px;
`

export const Header = styled.View`
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 369px;
  justify-content: space-around;
  align-items: center;
  padding: ${props => props.theme.metrics.basePadding * 2}px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const BackButtom = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  top: 16px;
`

export const WelcomeText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
`

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`
