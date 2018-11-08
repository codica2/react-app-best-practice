import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Popup } from "semantic-ui-react";

import StyledSpecialistCard from "./StyledSpecialistCard";
import InviteSpecialistModal from "./InviteSpecialistModal";

import { IMAGE_PORT, BLANK_AVATAR } from "@utilities";

class SpecialistCard extends Component {
  render() {
    const {
      specialist: {
        id,
        avatar,
        first_name,
        last_name,
        industry_title,
        hourly_rate,
        skills,
        experience_level_id
      },
      experienceLevels,
      projectId
    } = this.props;

    return (
      <StyledSpecialistCard>
        <div className="row info">
          <img
            src={avatar.url ? IMAGE_PORT + avatar.url : BLANK_AVATAR}
            alt="member"
          />
          <div className="detailed">
            <p className="name">
              {first_name}&nbsp;{last_name}
            </p>
            <p className="title">
              {experienceLevels &&
                experienceLevels[experience_level_id - 1] &&
                experienceLevels[experience_level_id - 1].text}
              &nbsp;{industry_title}
            </p>
            <p>{hourly_rate || 0}$/ hr</p>
          </div>
        </div>
        <div className="row skills">
          <span>{skills.length > 0 ? "Skills" : "No skills"}</span>
          {skills.slice(0, 3).map((skill, key) => (
            <div key={key} className="skill">
              {skill.name}
            </div>
          ))}
          {skills.length > 3 && (
            <Popup
              trigger={<div className="skill all">+{skills.length - 3}</div>}
              position="bottom center"
              on="hover"
            >
              {skills.slice(3).map((skill, key) => (
                <div key={key} className="skill">
                  {skill.name}
                </div>
              ))}
            </Popup>
          )}
        </div>
        <div className="row buttons">
          <InviteSpecialistModal specialistId={id} projectId={projectId} />
          <NavLink
            className="ui button dv-blue inverted"
            to={`/dashboard/specialist/${id}`}
            target="_blank"
          >
            View profile
          </NavLink>
        </div>
      </StyledSpecialistCard>
    );
  }
}

export default connect(
  ({ experienceLevels }) => ({
    experienceLevels
  }),
  null
)(SpecialistCard);
