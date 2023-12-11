import React, { useCallback } from 'react'
import validator from 'email-validator'

const useFormWithValidation = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function checkEmailInputValidity(name, value, target) {
    const isValid = validator.validate(value)
    setValues({...values, [name]: {
      'value': value,
      'isValid': isValid
    }})

    if(!isValid) {
      setErrors({...errors, [name]: 'Email указан в неверном формате'})
    } else {
      setErrors((val) => {
        delete errors[name]
        return val
      })
    }

    target.dataset.isValid = isValid
  }

  function checkNameInputValidity(name, value, target) {
    const isValid = value.match(/[а-яёa-z \-]+/iug) ? (value.match(/[а-яёa-z \-]+/iug)[0].length === value.length) : false
    setValues({...values, [name]: {
      'value': value,
      'isValid': isValid
    }})

    if(!isValid) {
      setErrors({...errors, [name]: 'Имя может содержать только кириллицу, латиницу, пробелы и дефис и не может быть пустым'})
    } else {
      setErrors((val) => {
        delete errors[name]
        return val
      })
    }

    target.dataset.isValid = isValid
  }

  function checkPasswordInputValidity(name, value, target) {
    const isValid = value.length > 0
    setValues({...values, [name]: {
      'value': value,
      'isValid': isValid
    }})

    if(!isValid) {
      setErrors({...errors, [name]: 'Пароль не может быть пустым'})
    } else {
      setErrors((val) => {
        delete errors[name]
        return val
      })
    }

    target.dataset.isValid = isValid
  }

  function checkFormValidity(formElement) {
    const inputs = Array.from(formElement.querySelectorAll('input'))
    if(inputs.every((input) => input.dataset.isValid === 'true')) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name === 'email') {
      checkEmailInputValidity(name, value, target)
    }
    if(name === 'name') {
      checkNameInputValidity(name, value, target)
    }

    if(name === 'password') {
      checkPasswordInputValidity(name, value, target)
    }

    checkFormValidity(target.closest('form'))
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid, setValues, setErrors };
}

export default useFormWithValidation
