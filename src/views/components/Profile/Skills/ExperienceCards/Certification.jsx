import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import StyledCard from "./StyledCard";
import EditCertificationCard from "./modals/EditCertificationCard";
import DeleteCard from "./modals/DeleteCard";

class Certification extends Component {
  state = {
    isExpanded: true
  };

  componentDidMount() {
    this.checkDescription(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkDescription(nextProps);
  }

  checkDescription(props) {
    const {
      education: { description }
    } = props;

    if (description) {
      if (description.length < 600) {
        this.setState({ isExpanded: false });
      } else {
        this.setState({ isExpanded: true });
      }
    } else {
      this.setState({ isExpanded: false });
    }
  }

  render() {
    const { education, editCard, deleteCard } = this.props;

    return (
      <StyledCard expanded={this.state.isExpanded ? "true" : ""}>
        {education && (
          <Card.Content>
            <EditCertificationCard education={education} editCard={editCard} />

            <DeleteCard data={education} deleteCard={deleteCard} />

            {education.name && <Card.Header>{education.name}</Card.Header>}
            {(education.specialisation || education.degree) && (
              <Card.Meta>
                {education.specialisation} {education.degree}
              </Card.Meta>
            )}
            {
              <Card.Description>
                {education["started_at"] && education["finished_at"] && (
                  <p className="period">
                    <img src="/images/time.png" alt="" />{" "}
                    {education.started_at.value || education.started_at} -{" "}
                    {education.finished_at.value || education.finished_at}
                  </p>
                )}
                {education.description && <p>{education.description}</p>}
              </Card.Description>
            }
          </Card.Content>
        )}

        {this.state.isExpanded && (
          <span className="show-btn fa fa-chevron-down" />
        )}
      </StyledCard>
    );
  }
}

export default Certification;
