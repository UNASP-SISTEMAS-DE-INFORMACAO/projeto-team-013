/* eslint-disable react/prop-types */
import React from 'react'

import { Formik } from 'formik'
import * as yup from 'yup'

import Buttom from '../../components/Buttom'
import Input from '../../components/Input'
import BackButtom from '../../components/BackButtom'
import { Container, Logo, Header, Text, Form, InputContainer } from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthActions from '../../store/ducks/auth'

const FormSchema = yup.object({
  email: yup
    .string()
    .required('Este campo deve ser preenchido')
    .email('Email invalido'),

  password: yup
    .string()
    .required('Este campo deve ser preenchido')
    .min(8, 'Este campo deve possuir no minimo 8 caracteres')
})

const Login = ({ authRequest, loading, error, navigation }) => {
  const inital = {
    email: '',
    password: ''
  }

  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()}/>
        <Logo source={require('../../assets/unasp.png')} />
        <Text>Bem Vindo, para logar preencha as informações abaixo</Text>
      </Header>

      <Formik
        initialValues={inital}
        validationSchema={FormSchema}
        onSubmit={values => {
          authRequest(values.email, values.password)
        }}
      >
        {props => (
          <Form>
            <InputContainer>
              <Input
                onTextChange={props.handleChange('email')}
                placeholder="Digite seu Email"
                value={props.values.email}
                onBlur={props.handleBlur('email')}
                error={
                  (props.touched.email && props.errors.email) ||
                  (props.touched.email && error)
                }
              />
              <Input
                onTextChange={props.handleChange('password')}
                placeholder="Digite sua senha"
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                error={props.touched.password && props.errors.password}
                secureTextEntry
              />

              <Buttom
                loading={loading}
                tittle={'Entrar'}
                handlePress={props.handleSubmit}
              />
            </InputContainer>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
