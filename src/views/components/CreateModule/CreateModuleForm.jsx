import React from "react";
import { Form, Field } from "redux-form";

import TextArea from "@UI/inputs/TextArea";
import RenderField from "@UI/inputs/InputField";
import FileUploader from "@UI/inputs/FileUploader";
import Datepicker from "@UI/inputs/Datepicker";

import StyledEpicPage from "@styled/EpicPage";
import { DvBlueButton } from "@styled/DVButton";

import { required, date, maxLength80, minLength2 } from "@views/utils/validate";

const CreateModuleForm = ({ handleSubmit, submitting, history }) => {
  return (
    <StyledEpicPage>
      <Form onSubmit={handleSubmit}>
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
              />
            </div>

            <div className="module-info">
              <Field
                name="attached_files"
                type="file"
                component={FileUploader}
                label="Attach files:"
                dropzone
              />
            </div>
          </section>

          <section className="module-main">
            <div className="module-title">Create module</div>

            <Field
              name="name"
              component={RenderField}
              label="Module name"
              placeholder="Type your module name here"
              validate={[required, minLength2, maxLength80]}
              isRequired
            />

            <Field
              name="description"
              component={TextArea}
              label="Brief / Description"
              placeholder="Type your description here"
              validate={[required]}
              isRequired
            />

            <Field
              name="user_story"
              component={TextArea}
              label="User story"
              placeholder="Type your user Story here"
              large
            />

            <Field
              name="deliverables"
              component={TextArea}
              label="Acceptance criteria"
              placeholder="Type your acceptance criteria here"
            />

            <Field
              name="business_requirements"
              component={TextArea}
              label="Business requirements"
              placeholder="Type your business requirements here"
              large
            />

            <Field
              name="business_rules"
              component={TextArea}
              label="Business rules"
              placeholder="Type your business rules here"
            />

            <Field
              name="notes"
              component={TextArea}
              label="Solution design"
              placeholder="Type your solution design here"
            />

            <div className="controls">
              <DvBlueButton
                className="dv-blue inverted transparent"
                onClick={history.goBack}
                type="button"
              >
                Cancel
              </DvBlueButton>
              <DvBlueButton
                type="submit"
                className="dv-blue"
                disabled={submitting}
              >
                Create
              </DvBlueButton>
            </div>
          </section>
        </div>
      </Form>
    </StyledEpicPage>
  );
};

export default CreateModuleForm;
