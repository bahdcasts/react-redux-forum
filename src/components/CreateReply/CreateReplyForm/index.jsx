import React from 'react'
import { Field, reduxForm } from 'redux-form'

import RenderTextField from '../../RenderTextField'

const CreateReplyForm = ({ handleSubmit, submitting, reset, invalid }) => ((
  <div className="modal fade" id="createReply" tabIndex={-1} role="dialog" aria-labelledby="createReplyLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title" id="createReplyLabel">Create Reply</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <Field component={RenderTextField} name="body" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={reset} data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-info" disabled={submitting || invalid}>Create Reply</button>
          </div>
        </form>
      </div>
    </div>
  </div>
))

export default reduxForm({
  form: 'create-reply'
})(CreateReplyForm)
