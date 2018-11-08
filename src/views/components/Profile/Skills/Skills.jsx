import React from "react";
import { Form, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Element } from "react-scroll";

import ExperinceCards from "./ExperienceCards";

import ImageUploader from "@UI/inputs/ImageUploader";
import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import RenderTextArea from "@UI/inputs/TextArea";
import MultiSelect from "@UI/inputs/MultiSelect";

import StyledExperienceCards from "@styled/ExperienceCards";
import { DvBlueButton } from "@styled/DVButton";

import { required, maxLength500 } from "@views/utils/validate";

export const communications = [
  "Phone",
  "Email",
  "Slack",
  "WhatsApp",
  "Skype",
  "Person",
  "Other"
];
const Skills = ({
  handleSubmit,
  submitting,
  avatar,
  experienceLevels,
  skills,
  getSkills,
  educations,
  work_experiences,
  isEditing
}) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={12} computer={16}>
          <Form onSubmit={handleSubmit}>
            <Grid columns={2}>
              <Grid.Row columns={2}>
                <Grid.Column computer={3}>
                  <Field
                    name="person"
                    component={ImageUploader}
                    type="file"
                    avatar={avatar}
                    disabled
                    placeholder="Choose your photo"
                  />
                </Grid.Column>

                <Grid.Column mobile={16} computer={10}>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column computer={16}>
                        <Field
                          name="about"
                          label="About you (tell us about experience, strengths, unique skills)"
                          placeholder="Ex. I'm a Front-End Developer with 10 years experience in HTML, CSS and Javascript. I combine my technical skills with outstanding communication skills."
                          component={RenderTextArea}
                          padBottom={10}
                          validate={[maxLength500]}
                        />
                      </Grid.Column>

                      <Grid.Column>
                        <Field
                          name="industry_title"
                          label="My industry title"
                          component={InputField}
                          validate={[required]}
                          isRequired
                        />

                        <MultiSelect
                          name="skills_attributes"
                          label="My top skills"
                          placeholder="Start typing here..."
                          onOpen={getSkills}
                          options={skills}
                        />
                      </Grid.Column>

                      <Grid.Column>
                        <Field
                          name="experience_level_id"
                          label="Experience level"
                          placeholder="Select"
                          component={SelectField}
                          options={experienceLevels}
                          validate={[required]}
                          isRequired
                        />
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column computer={16}>
                        <StyledExperienceCards>
                          <Element
                            name="education"
                            className="experience-section"
                          >
                            <h3>Certifications</h3>
                            <ExperinceCards educations={educations} />
                          </Element>
                        </StyledExperienceCards>
                      </Grid.Column>

                      <Grid.Column computer={16}>
                        <StyledExperienceCards>
                          <Element
                            name="experience"
                            className="experience-section"
                          >
                            <h3>Previous projects</h3>
                            <ExperinceCards experiences={work_experiences} />
                          </Element>
                        </StyledExperienceCards>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  {!submitting && (
                    <NavLink
                      exact
                      to={isEditing ? "/dashboard/about" : "/profile/info"}
                    >
                      <DvBlueButton
                        className="dv-blue inverted transparent"
                        uppercase="true"
                      >
                        {isEditing ? "Cancel" : "Back"}
                      </DvBlueButton>
                    </NavLink>
                  )}
                </Grid.Column>

                <Grid.Column textAlign="right">
                  <DvBlueButton
                    type="submit"
                    className="dv-blue"
                    loading={submitting}
                    uppercase="true"
                  >
                    {isEditing ? "Save" : "Save and continue"}
                  </DvBlueButton>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Skills;
