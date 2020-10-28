/* eslint-disable camelcase */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'

import Attachment from '../../components/Attachment'
import Delivery from '../../components/Delivery'
import ModuleLoading from '../../components/LoadingComponents/ModuleLoading'
import BaseComponentLoading from '../../components/LoadingComponents/BaseComponentLoading'

import {
  Container,
  Header,
  Title,
  BackButton,
  BackgroundHeader,
  Module,
  ModuleTitle,
  ModuleHeader,
  ModuleDescription,
  SimpleContainer
} from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ModuleActions from '../../store/ducks/module'

const ShowModule = ({
  loadModuleRequest,
  module,
  attachments,
  deliveries,
  navigation,
  route
}) => {
  const { colors, metrics } = useContext(ThemeContext)
  const { module_id } = route.params

  useEffect(() => {
    loadModuleRequest(module_id)
  }, [])

  const handleAttachmentPress = async attachment => {
    const { url } = attachment.file
    if (url) {
      WebBrowser.openBrowserAsync(url)
    }
  }

  const handleDeliveryPress = () => {
    alert('Not implemented yet')
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={22} color={colors.white} />
        </BackButton>
        <Title>Modulo</Title>
      </Header>
      <ModuleLoading loading={loading}>
        <Module>
          <ModuleHeader>
            <ModuleTitle>{module && module.name}</ModuleTitle>
            <Icon name="folder-open" size={22} color={colors.primary} />
          </ModuleHeader>
          <ModuleDescription>{module && module.description}</ModuleDescription>
        </Module>
      </ModuleLoading>

      <SimpleContainer>
        <ModuleTitle>Anexos</ModuleTitle>
        {loading ? (
          <BaseComponentLoading loading={loading} />
        ) : (
          attachments.map(attachment => (
            <Attachment
              key={attachment.id}
              title={attachment.title}
              description={attachment.description}
              handlePress={() => handleAttachmentPress(attachment)}
            />
          ))
        )}
      </SimpleContainer>
      <SimpleContainer>
        <ModuleTitle>Entregas</ModuleTitle>
        {loading ? (
          <BaseComponentLoading loading={loading} />
        ) : (
          deliveries.map(delivery => (
            <Delivery
              key={delivery.id}
              title={delivery.title}
              description={delivery.description}
              status={'completed'}
              handlePress={handleDeliveryPress}
            />
          ))
        )}
      </SimpleContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.module.loading,
  module: state.module.module,
  attachments: state.module.module ? state.module.module.attachments : [],
  deliveries: state.module.module ? state.module.module.deliveries : []
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModuleActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowModule)