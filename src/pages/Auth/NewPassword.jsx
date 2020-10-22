import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

import { onChangeForm, authConfirmForgotPassword } from 'redux/modules/auth/actions'

import AuthLayout from '.'
import useRedirect from 'hooks/useRedirect'

const NewPassword = ({ data, redirect, error }) => {

  const dispatch = useDispatch()


  const [form, setForm] = useState({
    new_password: "",
    confirm_password: ""
  })

  const fields = [
    {
      name: "code",
      type: "text",
    },
    {
      name: "new_password",
      type: "password",
      placeholder: "New Password"
    },
    {
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm Password"
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(authConfirmForgotPassword({ ...data }))
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
    dispatch(onChangeForm({ ...form, code: "", new_password: "", confirm_password: "" }))
  }, [])

  return <AuthLayout
    formFields={fields}
    formTitle="Reset New Password"
    buttonText="Reset Password"
    handleFormChange={onChange}
    handleSubmit={handleSubmit}
    errorText={error ? error.message : null}
  />
}

const mapStateToProps = ({ AuthReducer }) => ({
  data: AuthReducer.form,
  redirect: AuthReducer.redirect,
  error: AuthReducer.error
})

export default connect(mapStateToProps)(NewPassword)
