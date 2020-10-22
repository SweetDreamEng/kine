import React, { useState, useEffect } from 'react'
import AuthLayout from '.'

import { useDispatch, connect } from 'react-redux'
import { authSignIn, onChangeForm } from 'redux/modules/auth/actions'

import useError from 'hooks/useError'
import useRedirect from 'hooks/useRedirect'

const Login = ({ error, redirect }) => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password"
    }
  ]

  const [remember_me, setRememberMe] = useState(true)
  const [submited, setSubmited] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (submited) { return }
    dispatch(authSignIn({ ...form, remember_me: remember_me }))
    setSubmited(true)
  }

  /**
  * @description change form input values. 
  */
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    dispatch(onChangeForm({ ...form, [e.target.name]: e.target.value }))
  }

  useError(error, [() => setSubmited(false)])
  useRedirect(redirect)

  useEffect(() => {
    dispatch(onChangeForm({ ...form, email: "", password: "" }))
  }, [])

  return (
    <>
      <AuthLayout
        formFields={fields}
        formTitle="Login"
        buttonText="Login"
        linkTo="/forgot"
        handleFormChange={onChange}
        textLink="Forgot password?"
        handleSubmit={handleSubmit}
        errorText={error ? error.message : null}
      />
    </>
  )
}

const mapStateToProps = ({ AuthReducer }) => ({
  redirect: AuthReducer.redirect,
  error: AuthReducer.error,
})

export default connect(mapStateToProps)(Login)
