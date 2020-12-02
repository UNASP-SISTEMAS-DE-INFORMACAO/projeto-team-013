import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 90
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
