import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { IMAGE_PORT, BLANK_AVATAR } from "@utilities";

const renderOptions = data => {
  if (typeof data.value === "string")
    return <div className="profile-description">{data.value}</div>;

  switch (data.type) {
    case "labels":
      return renderLabels(data.value);
    case "experiences":
      return renderExperience(data.value);
    default:
      return null;
  }
};

const renderLabels = data => (
  <div className="profile-skills">
    {data.map(item => (
      <span key={item.id}>{item.name}</span>
    ))}
  </div>
);

const renderExperience = data =>
  data.map(item => (
    <div key={item.id} className="profile-content experience-cards">
      <div className="profile-block">
        <div className="">{item.name}</div>
        <div className="">{item.position || item.degree}</div>
        <span>{`${item.started_at} - ${item.finished_at}`}</span>
      </div>

      <div className="profile-description">{item.description}</div>
    </div>
  ));

const About = ({
  data,
  data: { info = [], skills, communications },
  services,
  educationsExperience,
  workExperience,
  editCondition
}) => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column computer={16}>
          <div className="profile-aside">
            <div className="profile-info">
              <div className="profile-image">
                <div className="image-wrapper">
                  <img
                    src={data.avatar ? IMAGE_PORT + data.avatar : BLANK_AVATAR}
                    alt="avatar"
                  />
                </div>

                <div className="profile-name">{data.name}</div>
                <div className="profile-label">{data.position}</div>
                <div className="profile-label">{`${data.experience_level} ${
                  data.industry_title
                }`}</div>
                <div className="profile-label">
                  <i className="fas fa-map-marker-alt" /> {data.address}
                </div>

                <div className="profile-about">{data.description}</div>

                {editCondition && (
                  <NavLink to="/profile/personal-details?edit">
                    <div className="dv-btn edit-btn">
                      <i className="fas fa-edit" />
                    </div>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Grid.Column>

        {info.map((item, index) => (
          <Grid.Column key={index} computer={8}>
            <div className="profile-info">
              <div className="profile-content">
                <div className="profile-header profile-subtitle">
                  <div className="pfofile-title">{item.title}</div>

                  {editCondition && (
                    <NavLink to={item.link}>
                      <div className="dv-btn">
                        <i className="fas fa-edit" />
                      </div>
                    </NavLink>
                  )}
                </div>

                {item.fields.map((field, index) => (
                  <div key={index} className="profile-item">
                    <div className="profile-label">{field.name}</div>
                    {renderOptions(field)}
                  </div>
                ))}
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default About;
