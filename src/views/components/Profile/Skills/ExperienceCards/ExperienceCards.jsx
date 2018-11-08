import React, { Component } from "react";
import { connect } from "react-redux";

import Certification from "./Certification";

import AddCertification from "./modals/AddCertification";
import WorkExperienceCard from "./WorkExperienceCard";
import AddWorkExperience from "./modals/AddWorkExperience";

import {
  addEducationCard,
  editEducationCard,
  deleteEducationCard,
  addWorkExperienceCard,
  editWorkExperienceCard,
  deleteExperienceCard
} from "@ducks/profile/actions";

class RenderExperienceCards extends Component {
  componentDidUpdate() {
    this.addEventListener();
  }

  addEventListener() {
    let elements = document.querySelectorAll(".show-btn");

    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = function() {
        this.parentElement.classList.toggle("show");
        this.classList.toggle("rotate");
      };
    }
  }

  render() {
    const {
      educations,
      experiences,
      addEducationCard,
      editEducationCard,
      deleteEducationCard,
      addWorkExperienceCard,
      editWorkExperienceCard,
      deleteExperienceCard
    } = this.props;

    return (
      <div className="cards-wrapper">
        {educations &&
          educations.map((education, key) => (
            <Certification
              key={key}
              education={education}
              editCard={editEducationCard}
              deleteCard={deleteEducationCard}
            />
          ))}

        {educations && <AddCertification addEducationCard={addEducationCard} />}

        {experiences &&
          experiences.map((experiences, index) => (
            <WorkExperienceCard
              key={index}
              experiences={experiences}
              editCard={editWorkExperienceCard}
              deleteCard={deleteExperienceCard}
            />
          ))}

        {experiences && <AddWorkExperience addCard={addWorkExperienceCard} />}
      </div>
    );
  }
}

const mapDispatchToProps = {
  addEducationCard,
  editEducationCard,
  deleteEducationCard,
  addWorkExperienceCard,
  editWorkExperienceCard,
  deleteExperienceCard
};

export default connect(
  null,
  mapDispatchToProps
)(RenderExperienceCards);
