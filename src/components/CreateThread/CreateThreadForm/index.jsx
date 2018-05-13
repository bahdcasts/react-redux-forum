import React from 'react'
import { reduxForm, Field } from 'redux-form'

import RenderField from '../../RenderField'
import RenderTextField from '../../RenderTextField'
import RenderSelectField from '../../RenderSelectField'

const CreateThreadForm = ({ channels }) => ((
  <div className="modal fade" id="createThread" tabIndex={-1} role="dialog" aria-labelledby="createThreadLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createThreadLabel">Create Thread</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="">Title</label>
              <Field component={RenderField} name="title" autoFocus />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <Field component={RenderTextField} name="body" />
            </div>
            <div className="form-group">
              <label htmlFor="channel">Channel</label>
              <Field component={RenderSelectField} name="channel_id">
                {channels.map(channel => <option value={channel.id}>{channel.name}</option>)}            
              </Field>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

))

export default reduxForm({
  form: 'create-thread-form'
})(CreateThreadForm)
