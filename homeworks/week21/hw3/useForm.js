// eslint-disable-next-line import/no-unresolved
import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    if (Object.keys(validate(values)).length > 0) {
      alert('請輸入完整的資料')
      return
    }
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useForm
