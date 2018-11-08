import React, { Component } from "react";
import { connect } from "react-redux";
import ClassNames from "classnames";
import { StyledSpecialist } from "@UI/AssignDropdown/StyledAssignDropdown";
import { Field, change } from "redux-form";
import { Input } from "semantic-ui-react";
import { createNumberMask } from "redux-form-input-masks";
import { oneOfRoles } from "@views/utils/functions";
import {
  IMAGE_PORT,
  BLANK_AVATAR,
  S_REDGUY,
  S_ACTIVE,
  S_CORE
} from "@utilities";

const InputField = ({ input, ...rest }) => <Input {...input} {...rest} />;

class SpecialistTile extends Component {
  remove = () => {
    const {
      remove,
      specialist: { id }
    } = this.props;

    remove(id);

    this.props.dispatch(change("EditTaskForm", `cost_spec_${id}`, null));
  };

  submitCost = e => {
    const {
      handleSubmit,
      specialist: { id }
    } = this.props;

    handleSubmit(id);
  };

  render() {
    const {
      specialist,
      hideCosts,
      specialistId,
      userRole,
      ownCosts
    } = this.props;
    const allowed = oneOfRoles(userRole, S_REDGUY);

    const avatarClass = ClassNames({
      "user-avatar": true,
      blank: !specialist.avatar.url
    });

    return (
      <StyledSpecialist>
        <div className="avatar-wrapper">
          <img
            src={
              specialist.avatar.url
                ? IMAGE_PORT + specialist.avatar.url
                : BLANK_AVATAR
            }
            className={avatarClass}
            alt={specialist.first_name + " " + specialist.last_name}
          />
          {allowed && <button type="button" onClick={this.remove} />}
        </div>
        <p>{specialist.first_name + " " + specialist.last_name}</p>
        {allowed && !hideCosts && (
          <Field
            name={"cost_spec_" + specialist.id}
            component={InputField}
            fluid
            autoComplete="off"
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.submitCost(e);
                e.target.blur();
              }
            }}
            onBlur={e => this.submitCost(e)}
            {...createNumberMask({
              prefix: "$"
            })}
          />
        )}
        {oneOfRoles(S_ACTIVE, S_CORE) &&
          specialistId === specialist.id &&
          ownCosts && <span className="spec-costs">{`$${ownCosts}`}</span>}
      </StyledSpecialist>
    );
  }
}

export default connect()(SpecialistTile);
