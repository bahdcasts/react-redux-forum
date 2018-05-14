import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderField from '../../../components/RenderField'
import RenderTextField from '../../../components/RenderTextField'

const EditThreadForm = ({ handleSubmit, submitting }) => ((
  <form onSubmit={handleSubmit}> 
    <div className="form-group">
      <Field component={RenderField} name="title" />
    </div>
    <div className="form-group">
      <Field component={RenderTextField} name="body" />
    </div>
    <button disabled={submitting} className="btn btn-info float-right">Update Thread</button>
  </form>
))

export default reduxForm({
  form: 'edit-thread-form'
})(EditThreadForm)
