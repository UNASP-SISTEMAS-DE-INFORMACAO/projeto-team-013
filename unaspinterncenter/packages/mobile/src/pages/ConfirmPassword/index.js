import React from 'react'

import { Formik } from 'formik'
import * as yup from 'yup'

import Buttom from '../../components/Buttom'
import Input from '../../components/Input'
import BackButtom from '../../components/BackButtom'
import Progress from '../../components/Progress'
import { Container, Logo, Header, Text, Form, InputContainer } from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SignUpActions from '../../store/ducks/signup'

const FormSchema = yup.object({
  password: yup
    .string()
    .required('Este campo deve ser preenchido')
    .min(8, 'Este campo deve possuir no minimo 8 caracteres'),

  confirmPassword: yup
    .string()
    .required('Este campo deve ser preenchido')
    .min(8, 'Este campo deve possuir no minimo 8 caracteres')
    .test('passwords-match', 'As senhas não são iguais', function (value) {
      return this.parent.password === value
    })
})

const ConfirmPassword = ({ route, navigation, signUpRequest }) => {
  const { registerStudent } = route.params

  const initalValues = {
    password: '',
    confirmPassword: ''
  }

  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()} />
        <Logo source={require('../../assets/unasp.png')} />
        <Text>Digite sua senha e confirme para finalizar o cadastro</Text>
        <Progress level={2} />
      </Header>

      <Formik
        initialValues={initalValues}
        validationSchema={FormSchema}
        onSubmit={values => {
          const student = {
            ...registerStudent,
            password: values.password
          }
          signUpRequest(student)
        }}
      >
        {props => (
          <Form>
            <InputContainer>
              <Input
                onTextChange={props.handleChange('password')}
                placeholder="Digite sua senha"
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                error={props.touched.password && props.errors.password}
                secureTextEntry
              />
              <Input
                onTextChange={props.handleChange('confirmPassword')}
                placeholder="Confirme sua senha"
                value={props.values.confirmPassword}
                onBlur={props.handleBlur('confirmPassword')}
                error={
                  props.touched.confirmPassword && props.errors.confirmPassword
                }
                secureTextEntry
              />
            </InputContainer>
            <Buttom
              tittle={'Finalizar cadastro'}
              handlePress={props.handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignUpActions, dispatch)

export default connect(null, mapDispatchToProps)(ConfirmPassword)
