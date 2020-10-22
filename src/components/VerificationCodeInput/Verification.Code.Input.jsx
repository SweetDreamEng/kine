import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { onChangeForm } from 'redux/modules/auth/actions'
import { getNumFromStr } from 'helpers/helpers'

const VerificationCodeInput = () => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    vCode1: '',
    vCode2: '',
    vCode3: '',
    vCode4: '',
    vCode5: '',
    vCode6: ''
  })

  const handleKeyUp = (e) => {
    const key = e.which

    /**
     * @description number and backspace
     */
    if ((key >= 48 && key <= 57 || key === 8)) {
      if (key === 8) { /** @description backsapce */
        if (e.target.name !== 'vCode1')
          document.getElementById(e.target.name).previousElementSibling.focus()
      } else if (e.target.name !== 'vCode6') {
        document.getElementById(e.target.name).nextElementSibling.focus()
      }
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleInput = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1)
    }
  }

  useEffect(() => {
    dispatch(onChangeForm({ code: "" }));
  }, [])

  /**
   * @description update store value of verification code
   */
  useEffect(() => {
    const code = `${form.vCode1}${form.vCode2}${form.vCode3}${form.vCode4}${form.vCode5}${form.vCode6}`
    dispatch(onChangeForm({ ...form, code: code }))
  }, [form])

  return (
    <div className="verify-form">
      {
        Object.keys(form).map(key =>
          <input
            className="verify-form__input"
            type="number"
            id={key}
            name={key}
            key={key}
            onKeyUp={handleKeyUp}
            onInput={handleInput}
          />)
      }
    </div>)
}

export default VerificationCodeInput
