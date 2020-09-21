/* eslint-disable react/prop-types */
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import Buttom from '../../components/Buttom'
import BackButtom from '../../components/BackButtom'
import Progress from '../../components/Progress'
import Input from '../../components/Input'

import { Container, Logo, Header, WelcomeText, Form } from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SignUpActions from '../../store/ducks/signup'

const FormSchema = yup.object({
  email: yup
    .string()
    .required('Este campo deve ser preenchido')
    .email('Email invalido')
})

const Register = ({ navigation, loading, error, student }) => {
  const inital = {
    email: ''
  }

  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()} />
        <Logo source={require('../../assets/unasp.png')} />
        <WelcomeText>
          Ola {student.name}, digite seu email para continuarmos com seu
          cadastro
        </WelcomeText>
        <Progress level={1} />
      </Header>

      <Formik
        initialValues={inital}
        validationSchema={FormSchema}
        onSubmit={values => {
          navigation.navigate('ConfirmPassword', {
            registerStudent: {
              ...student,
              ...values
            }
          })
        }}
      >
        {props => (
          <Form>
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
            <Buttom
              loading={loading}
              tittle={'Confirmar'}
              handlePress={props.handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </Container>
  )
}
const mapStateToProps = state => ({
  loading: state.signup.loading,
  error: state.signup.error,
  student: state.signup.student
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignUpActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)
