import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

import { authForgotPasswordSubmit, onChangeForm } from 'redux/modules/auth/actions'

import AuthLayout from '.'
import useRedirect from 'hooks/useRedirect'

const ResetPassword = ({ data, redirect, error }) => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    new_password: "",
    confirm_password: ""
  })

  const fields = [
    {
      name: "new_password",
      type: "password",
      placeholder: 'New Password'
    },
    {
      name: "confirm_password",
      type: "password",
      placeholder: 'Confirm New Password'
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(authForgotPasswordSubmit({ ...data }))
  }

  /**
   * @description change form input values
  */
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    dispatch(onChangeForm({ ...form, [e.target.name]: e.target.value }))
  }

  useRedirect(redirect)

  useEffect(() => {
    dispatch(onChangeForm({ ...form, new_password: "", confirm_password: "" }))
  }, [])

  return <AuthLayout
    formFields={fields}
    formTitle="Reset Password"
    buttonText="Reset Password"
    handleFormChange={onChange}
    handleSubmit={handleSubmit}
    errorText={error ? error.message : null}
  />
}

const mapStateToProps = ({ AuthReducer }) => ({
  redirect: AuthReducer.redirect,
  data: AuthReducer.form,
  error: AuthReducer.error
})

export default connect(mapStateToProps)(ResetPassword)
