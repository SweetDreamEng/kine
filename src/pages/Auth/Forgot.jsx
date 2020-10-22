import React, { useState } from 'react'

import { connect, useDispatch } from 'react-redux'
import { onChangeForm, authForgotPassword } from 'redux/modules/auth/actions'

import AuthLayout from '.'
import useRedirect from 'hooks/useRedirect'

const ForgotPassword = ({ redirect }) => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    email: "",
    type: "email"
  })

  const fields = [
    {
      name: "email",
      placeholder: 'Email'
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(authForgotPassword({ ...form }))
  }

  /**
   * @description change form input values
  */
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    dispatch(onChangeForm({ ...form, [e.target.name]: e.target.value }))
  }

  useRedirect(redirect)

  return <AuthLayout
    formFields={fields}
    formTitle="Reset Password"
    buttonText="Send Code"
    linkTo="/login"
    handleFormChange={onChange}
    textLink="Log in Here"
    handleSubmit={handleSubmit}
  />
}

const mapStateToProps = ({ AuthReducer }) => ({
  redirect: AuthReducer.redirect
})

export default connect(mapStateToProps)(ForgotPassword)
