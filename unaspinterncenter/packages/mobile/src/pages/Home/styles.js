import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
`

export const LoggedUser = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`

export const Logo = styled.Image`
  width: 43px;
  height: 43px;
  border-radius: 50;
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
export const Title = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-left: 16px;
  margin-top: 16px;
`

export const SimpleList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center'
  }
})`
  flex-grow: 0;
  height: 154px;
  margin-top: 10px;
`
