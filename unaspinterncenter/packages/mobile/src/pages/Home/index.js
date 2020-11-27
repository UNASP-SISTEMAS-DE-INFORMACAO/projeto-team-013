/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ActivityIndicator } from 'react-native'
import NewsCard from '../../components/NewsCard'
import MenuCard from '../../components/MenuCard'
import { menuItems } from '../../utils/menu'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import {
  Container,
  BackgroundHeader,
  Header,
  LoggedUser,
  Logo,
  SimpleList,
  Title
} from './styles'

import { connect } from 'react-redux'

const Home = ({ navigation, username, loading }) => {
  const { colors, metrics } = useContext(ThemeContext)
  const teste = [0, 1, 2, 3]

  const menuNavigate = title => {
    navigation.navigate(title)
  }

  return (
    <Container>
      <BackgroundHeader />
      <Header>
        {username ? (
          <LoggedUser>{username}</LoggedUser>
        ) : (
          <ActivityIndicator color={colors.white} size="large" />
        )}
        <Logo source={require('../../assets/unasp.png')} />
      </Header>

      <Title>Novidades</Title>

      <SimpleList
        snapToInterval={metrics.screenWidth}
        decelerationRate="fast"
        horizontal={true}
        data={teste}
        scrollEventThrottle={16}
        keyExtractor={item => item.toString()}
        ListEmptyComponent={() => {}}
        renderItem={({ item }) => (
          <ShimmerPlaceHolder
            visible={!loading}
            style={{
              margin: 10,
              height: 154,
              width: 380,
              borderRadius: 10
            }}
          >
            <NewsCard />
          </ShimmerPlaceHolder>
        )}
      />
      <Title>Menu</Title>
      <SimpleList
        horizontal={true}
        data={menuItems}
        scrollEventThrottle={16}
        keyExtractor={item => item.name.toString()}
        ListEmptyComponent={() => {}}
        renderItem={({ item }) => (
          <ShimmerPlaceHolder
            visible={!loading}
            style={{
              margin: 10,
              height: 154,
              width: 134,
              borderRadius: 10
            }}
          >
            <MenuCard
              handleOnPress={() => menuNavigate(item.screen)}
              title={item.name}
              picture={item.picture}
            />
          </ShimmerPlaceHolder>
        )}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  username: state.user.name,
  loading: state.user.loading
})

export default connect(mapStateToProps, null)(Home)
