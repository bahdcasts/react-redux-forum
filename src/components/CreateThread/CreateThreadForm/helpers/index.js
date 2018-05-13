const validateCreateThreadForm = (values) => {
  let errors = {}

  if (!values.title) {
    errors.title = ['The title is required']
  }
  if (!values.channel_id) {
    errors.channel_id = ['The channel is required']
  }
  if (!values.body) {
    errors.body = ['The body is required.']
  }
  return errors
} 

export default validateCreateThreadForm
