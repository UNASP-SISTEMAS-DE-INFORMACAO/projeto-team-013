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
  ra: yup
    .string()
    .required('Este campo deve ser preenchido')
    .min(4, 'Minimo de 4 caracteres')
})

const FindStudent = ({ navigation, loading, error, findStudentRequest }) => {
  const inital = {
    ra: ''
  }

  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()} />
        <Logo source={require('../../assets/unasp.png')} />
        <WelcomeText>
          Para continuar, por favor insira seu RA abaixo
        </WelcomeText>
        <Progress level={0} />
      </Header>
      <Formik
        initialValues={inital}
        validationSchema={FormSchema}
        onSubmit={values => {
          findStudentRequest(values.ra)
        }}
      >
        {props => (
          <Form>
            <Input
              keyboardType="number-pad"
              onTextChange={props.handleChange('ra')}
              error={
                (props.touched.ra && props.errors.ra) ||
                (props.touched.ra && error)
              }
              value={props.values.ra}
              onBlur={props.handleBlur('ra')}
              placeholder="Digite seu RA"
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
  error: state.signup.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignUpActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FindStudent)
