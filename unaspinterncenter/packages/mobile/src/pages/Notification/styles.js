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
export const User = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`
export const NotificationHeader = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`

export const MessageNotification = styled.View`
  align-items: flex-start;
  background: ${props => props.theme.colors.white};
  margin-top: 21px;
  margin-left: 9px;
  margin-right: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
  height: 100px;
`

export const NotificationTittle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
`
export const NotificationText = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: ${props => props.theme.colors.primary};
  padding-left: 5px;
  padding-top: 10px;
`
export const DateNotification = styled.Text`
  align-self: flex-end;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 30px;
  margin-right: 5px;
  color: ${props => props.theme.colors.primary};
`
export const NotificationList = styled.ScrollView`
  border-radius: 6px;
  width: 90%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  margin-top: 25px;
  left: 16px;
`
