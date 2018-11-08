import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserData } from "@ducks/user/actions";
import { specialistOperations } from "@ducks/specialists";
import { getExperienceLevels } from "@ducks/experienceLevels/actions";
import { getIndustries } from "@ducks/industries/actions";

import { SPECIALIST } from "@utilities";
import About from "./About";

class AboutContainer extends Component {
  componentDidMount() {
    const {
      specialist,
      getSpecialist,
      getExperienceLevels,
      getIndustries,
      getUserData
    } = this.props;

    if (specialist) getSpecialist(specialist);
    else getUserData();
    getExperienceLevels();
    getIndustries();
  }

  renderIndustryName = id => {
    const { industries } = this.props;

    let industry = null;

    if (industries && industries["industry"] && id) {
      industry = industries["industry"][id - 1].label;
    }

    return industry;
  };

  renderExperienceLevel = () => {
    const { user, experienceLevels } = this.props;

    return experienceLevels && user
      ? experienceLevels[user.experience_level_id - 1]
        ? experienceLevels[user.experience_level_id - 1]["name"]
        : "No experience level"
      : null;
  };

  getExperience = data => ({
    title: "My skills & experience",
    link: "/profile/skills&experience?edit",
    fields: [
      {
        name: "Top skills",
        value: data.skills || "No skills",
        type: "labels"
      },
      {
        name: "Certifications",
        value: data.educations || "No certifications",
        type: "experiences"
      },
      {
        name: "Previous projects",
        value: data.work_experiences || "No projects",
        type: "experiences"
      },
      {
        name: "Languages",
        value: data.languages || "No languages",
        type: "labels"
      }
    ]
  });

  getTrading = data => ({
    title: "Trading information",
    link: "/profile/trading?edit",
    fields: [
      {
        name: "Project interests",
        value: data.project_interests || "No project interests",
        type: "labels"
      },
      {
        name: "About the company",
        value: data.company_about || "No information"
      },
      {
        name: "Company capabilities",
        value: data.company_capabilities || "No company capabilities",
        type: "labels"
      },
      {
        name: "Industry experience",
        value: data.industry_experience || "No industry experience",
        type: "labels"
      },
      {
        name: "Number of epmloyees",
        value: data.number_of_employers || "No epmloyees"
      }
    ]
  });

  render() {
    const { specialist, user, specialistWithId } = this.props;

    const activeUser = specialist ? specialistWithId : user;

    if (activeUser) {
      document.title = activeUser.first_name + " " + activeUser.last_name;
    }

    let data = {};

    if (activeUser) {
      data = {
        avatar: (activeUser.avatar && activeUser.avatar.url) || null,
        name: `${activeUser.first_name} ${activeUser.last_name}`,
        email: activeUser.email,
        phone: activeUser.phone_number,
        position: activeUser.position,
        experience_level: this.renderExperienceLevel(),
        industry_title: activeUser.industry_title,
        address:
          activeUser.address &&
          activeUser.address.city + ", " + activeUser.address.country,
        description:
          activeUser.professional_experience_info || activeUser.description,
        skills: activeUser.skills,
        communications: activeUser.communication_type,
        info: [this.getExperience(activeUser), this.getTrading(activeUser)]
      };
    }

    return <About data={data} editCondition={!specialist} />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    specialistWithId: state.specialists[props.specialist],
    industries: state.industries,
    experienceLevels: state.experienceLevels,
    user: state.user
  };
};

const mapDispatchToProps = {
  ...specialistOperations,
  getExperienceLevels,
  getIndustries,
  getUserData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
