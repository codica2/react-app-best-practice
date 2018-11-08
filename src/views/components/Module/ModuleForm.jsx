import React from "react";
import { Field } from "redux-form";

import TextArea from "@UI/inputs/TextArea/Async";
import Datepicker from "@UI/inputs/Datepicker";
import FileUploader from "@UI/inputs/FileUploader";

import StyledEpicPage from "@styled/EpicPage";
import { DvButtonRed } from "@styled/DVButton.js";

import {
  required,
  date,
  maxLength80,
  minLength2,
  formatCurrency
} from "@views/utils/validate";

const ModuleForm = ({
  match: {
    params: { projectId, num: epicId }
  },
  handleSubmit,
  epicSelfUpdate,
  deleteEpicFetch,
  initialValues: { name, cost, id, project_id },
  hasPermission
}) => {
  return (
    <StyledEpicPage edit>
      <form onSubmit={handleSubmit}>
        <div className="module">
          <section className="module-aside">
            <div className="module-info">
              <Field
                name="eta"
                component={Datepicker}
                type="date"
                label="ETA:"
                placeholder="Due date"
                className="estimate inline-in-module"
                validate={[date]}
                selfSubmit
                disabled={!hasPermission}
              />

              {hasPermission && (
                <div className="module-costs">
                  <label>Total costs:</label>
                  <span>
                    <i className="fas fa-dollar-sign" /> {formatCurrency(cost)}
                  </span>
                </div>
              )}
            </div>

            <div className="module-info">
              <div className="label">Attached files:</div>
              <Field
                name="attached_files"
                type="file"
                component={FileUploader}
                onSelfSubmit={(name, value) =>
                  epicSelfUpdate({ [name]: value, project_id, id })
                }
                disabled={!hasPermission}
                dropzone
              />
            </div>

            {hasPermission && (
              <div className="controls">
                <DvButtonRed
                  type="button"
                  className="dv-red"
                  onClick={() => deleteEpicFetch(projectId, id, name)}
                >
                  Delete module
                </DvButtonRed>
              </div>
            )}
          </section>

          <section className="module-main">
            <div className="module-title">{name ? name : "Edit module"}</div>

            <Field
              name="name"
              component={TextArea}
              label="Module name"
              placeholder={
                hasPermission ? "Type your module name here" : "No module name"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              validate={[required, minLength2, maxLength80]}
              projectId={projectId}
              epicId={epicId}
              updateEpic
              updateEpicName
              autoHeight
              isRequired
            />

            <Field
              name="description"
              component={TextArea}
              label="Brief / Description"
              placeholder={
                hasPermission ? "Type your description here" : "No description"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              validate={[required]}
              autoHeight
              isRequired
            />

            <Field
              name="user_story"
              component={TextArea}
              label="User story"
              placeholder={
                hasPermission ? "Type your user story here" : "No user story"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              autoHeight
              large
            />

            <Field
              name="deliverables"
              component={TextArea}
              label="Acceptance criteria"
              placeholder={
                hasPermission
                  ? "Type your acceptance criteria here"
                  : "No acceptance criteria"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              autoHeight
              large
            />

            <Field
              name="business_requirements"
              component={TextArea}
              label="Business requirements"
              placeholder={
                hasPermission
                  ? "Type your business requirements here"
                  : "No business requirements"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              autoHeight
              large
            />

            <Field
              name="business_rules"
              component={TextArea}
              label="Business rules"
              placeholder={
                hasPermission
                  ? "Type your business rules here"
                  : "No business rules"
              }
              className="transparent"
              disabled={!hasPermission}
              selfSubmit
              autoHeight
            />

            <Field
              name="notes"
              component={TextArea}
              className="transparent"
              placeholder={
                hasPermission
                  ? "Type your solution design here"
                  : "No solution design"
              }
              label="Solution design"
              disabled={!hasPermission}
              selfSubmit
              autoHeight
              large
            />
          </section>
        </div>
      </form>
    </StyledEpicPage>
  );
};

ModuleForm.defaultProps = {
  initialValues: {}
};

export default ModuleForm;
