import styled from 'styled-components/native'
import { FlatList } from 'react-native'

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

export const Content = styled.View`
  background: ${props => props.theme.colors.white};
  width: ${props => props.theme.metrics.screenWidth - 32}px;
  min-height: 300px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #dedede;
  padding: ${props => props.theme.metrics.basePadding}px;
  margin: 16px;
`

export const ContentTitle = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`

export const SimpleList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center'
  }
})`
  flex-grow: 0;
  margin-top: 10px;
`

export const EmptyListContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  min-height: 120px;
  border-bottom-width: 1px;
  border-color: #e7ecef;
`

export const EmptyContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`
export const Add = styled.TouchableOpacity``
