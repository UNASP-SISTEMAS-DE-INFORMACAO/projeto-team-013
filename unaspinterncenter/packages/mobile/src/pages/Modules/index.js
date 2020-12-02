import React, { useContext, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { ThemeContext } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import Module from '../../components/Module'

import {
  Container,
  Header,
  BackgroundHeader,
  BackButton,
  Title
} from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ModuleActions from '../../store/ducks/module'

const Modules = ({ navigation, loadModulesRequest, modules, loading }) => {
  const { colors, metrics } = useContext(ThemeContext)
  const dummyArray = [0, 1, 2, 3, 4, 5]
  const isFocused = useIsFocused()

  useEffect(() => {
    loadModulesRequest()
  }, [])

  useEffect(() => {
    if (isFocused) {
      return () => loadModulesRequest()
    }
  }, [isFocused])

  const handleModulePress = id => {
    navigation.navigate('ShowModule', { module_id: id })
  }

  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={22} color={colors.white} />
        </BackButton>
        <Title>Modulos</Title>
      </Header>
      {loading
        ? dummyArray.map(item => (
            <ShimmerPlaceHolder
              key={item}
              visible={!loading}
              style={{
                margin: 20,
                height: 87,
                width: metrics.screeWidth,
                borderRadius: 10
              }}
            >
              <Module key={item} />
            </ShimmerPlaceHolder>
          ))
        : modules.map(item => (
            <ShimmerPlaceHolder
              key={item.id}
              visible={!loading}
              style={{
                margin: 20,
                height: 87,
                width: metrics.screeWidth,
                borderRadius: 10
              }}
            >
              <Module
                name={item.name}
                key={item.id}
                id={item.id}
                handlePress={handleModulePress}
              />
            </ShimmerPlaceHolder>
          ))}
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.module.loading,
  modules: state.module.modules
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModuleActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modules)
