import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 90
  }
})`
  background: ${props => props.theme.colors.white};
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
  justify-content: flex-end;
  flex-direction: row;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`

export const NotificationHeader = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`

export const NotificationsContainer = styled.View`
  background: ${props => props.theme.colors.white};
  width: ${props => props.theme.metrics.screenWidth - 32}px;
  min-height: 300px;
  padding-left: 10px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #dedede;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
`

export const MessageNotification = styled.View`
  margin-top: 20px;
  margin-right: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
  height: 100px;
`

export const NotificationTittle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
`
export const NotificationText = styled.Text`
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
