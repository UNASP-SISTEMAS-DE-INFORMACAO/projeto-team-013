/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
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

const Home = ({ navigation }) => {
  const teste = [0, 1, 2, 3]

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const menuNavigate = title => {
    navigation.navigate(title)
  }

  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <LoggedUser>Carlos Henrique</LoggedUser>
        <Logo
          source={{
            uri:
              'https://cdn1.unasp.br/noticias/wp-content/uploads/2018/11/21164848/Logo-UNASP-03.png'
          }}
        />
      </Header>

      <Title>Novidades</Title>

      <SimpleList
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

export default Home
