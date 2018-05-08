import isEmail from 'validator/lib/isEmail'

const validateRegistrationForm = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = ['The email is required.']
  } else {
    if (!isEmail(values.email)) {
      errors.email = ['The email is invalid.']
    }
  }

  if (!values.name) {
    errors.name = ['The name is required.']
  } else {
    if (values.name.length > 15) {
      errors.name = ['The name must not be longer than 15 characters.']
    }
  }

  if (!values.password) {
    errors.password = ['The password is required.']
  } else {
    if (values.password !== values.password_confirmation) {
      errors.password = ['The password confirmation does not match.']
    }
  }

  return errors
}

export default validateRegistrationForm
