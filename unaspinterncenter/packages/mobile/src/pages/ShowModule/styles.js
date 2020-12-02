import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 20
  }
})`
  background: ${props => props.theme.colors.white};
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
  font-weight: bold;
`

export const BackButton = styled.TouchableOpacity``

export const BackgroundHeader = styled.View`
  position: absolute;
  width: 100%;
  height: 369px;
  top: 0px;
  background-color: ${props => props.theme.colors.primary};
  border-bottom-left-radius: ${props => props.theme.metrics.baseRadius}px;
  border-bottom-right-radius: ${props => props.theme.metrics.baseRadius}px;
`

export const Module = styled.View`
  background: ${props => props.theme.colors.white};
  width: ${props => props.theme.metrics.screenWidth - 32}px;
  min-height: 300px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #dedede;
  padding: ${props => props.theme.metrics.basePadding}px;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
`

export const ModuleHeader = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const ModuleTitle = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`

export const SimpleContainer = styled.View`
  margin-top: ${props => props.theme.metrics.baseMargin}px;
`

export const ModuleDescription = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.metrics.baseMargin}px;
`
