import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
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

export const InputContainer = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#0E395E'
})`
  width: 70%;
  height: 45px;
  background: ${props => props.theme.colors.white};
  border-radius: 6px;
  padding-left: 16px;
`

export const SearchButton = styled.TouchableOpacity`
  width: 25%;
  height: 45px;
  background: ${props => props.theme.colors.white};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`
export const Type = styled.View`
  height: 32px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.white};
  margin-left: 16px;
`
export const TypeText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`

export const SimpleList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center'
  }
})`
  flex-grow: 0;
  margin-top: 30px;
`
export const Job = styled.View`
  width: ${props => props.theme.metrics.screenWidth - 32}px;
  height: 123px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 16px;
  border-width: 1px;
  border-color: #c4c4c4;
`

export const JobsContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`
