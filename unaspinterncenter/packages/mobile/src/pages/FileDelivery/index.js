import React, { useContext } from 'react'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import * as DocumentPicker from 'expo-document-picker'
import Consants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import File from '../../components/File'
import ModalLoading from '../../components/ModalLoading'
import Progress from '../../components/ProgressWithStep'

import {
  Container,
  BackgroundHeader,
  Title,
  BackButton,
  Header,
  Content,
  ContentTitle,
  SimpleList,
  EmptyListContainer,
  Add
} from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FileActions from '../../store/ducks/file'

const FileDelivery = ({
  delivery,
  updateFileDelivery,
  file_deliveries,
  sendFileDeliveryRequest,
  loading,
  navigation
}) => {
  const { colors, metrics } = useContext(ThemeContext)

  async function handleFileDelivery(id) {
    try {
      const result = await pickPostPicture()
      if (id) {
        showUpdateFileDialog(result, id)
      } else {
        showInsertFileDialog(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function showUpdateFileDialog(result, id) {
    Alert.alert(
      '',
      'Tem certeza que deseja atualizar o arquivo ?',
      [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            updateFileDelivery(id, result)
          }
        }
      ],
      { cancelable: false }
    )
  }

  function showInsertFileDialog(result) {
    if (result.type !== 'cancel') {
      Alert.alert(
        '',
        'Tem certeza que enviar o arquivo ?',
        [
          {
            text: 'Cancelar'
          },
          {
            text: 'Enviar',
            onPress: () => {
              sendFileDeliveryRequest(result)
            }
          }
        ],
        { cancelable: false }
      )
    }
  }

  async function getUserPermission() {
    await Permissions.getAsync(Permissions.CAMERA_ROLL)
  }

  async function pickPostPicture() {
    if (Consants.platform.ios) {
      getUserPermission()
    }
    const result = await DocumentPicker.getDocumentAsync()
    return result
  }

  console.log(file_deliveries)

  return (
    <Container>
      <ModalLoading visible={loading} />
      <BackgroundHeader />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={22} color={colors.white} />
        </BackButton>
        <Title>{delivery.title}</Title>
      </Header>
      <SimpleList
        snapToInterval={metrics.screenWidth}
        decelerationRate="fast"
        ListFooterComponent={() => (
          <Content>
            <EmptyListContainer>
              <ContentTitle>Nenhum arquivo adicionado</ContentTitle>
              <Add onPress={() => handleFileDelivery()}>
                <Icon name="add" size={22} color={colors.primary} />
              </Add>
            </EmptyListContainer>
          </Content>
        )}
        horizontal={true}
        data={file_deliveries}
        scrollEventThrottle={16}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={[
          { flexGrow: 1 },
          file_deliveries.length ? null : { justifyContent: 'center' }
        ]}
        renderItem={({ item }) => (
          <Content>
            <ContentTitle>Documento enviado</ContentTitle>
            <File
              id={item.file.id}
              handleUpdate={handleFileDelivery}
              filename={item.file.key}
              updated_at={item.updatedAt}
            />
            <Progress currentStep={item.status} />
          </Content>
        )}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  delivery: state.module.delivery,
  file_deliveries: state.file.file_deliveries,
  loading: state.file.loading
})

const mapDispatchToProps = dispatch => bindActionCreators(FileActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FileDelivery)
