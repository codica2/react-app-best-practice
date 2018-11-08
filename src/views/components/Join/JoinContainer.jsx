import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { NavLink } from "react-router-dom";
import { Tab } from "semantic-ui-react";

import JoinForm from "./JoinForm";

import history from "../../../history";

import StyledFormHeader from "@styled/forms/FormHeader";
import StyledTabs from "@styled/StyledTabs";
import StyledAuthForm from "@styled/forms/AuthForm";

import { join } from "@ducks/user/actions";

class JoinContainer extends Component {
  state = {
    activeUser: "specialist"
  };

  static propTypes = {
    join: PropTypes.func.isRequired
  };

  handleTabChange = (ev, { activeIndex, panes }) => {
    this.setState({
      activeUser: panes[activeIndex].menuValue
    });
  };

  render() {
    const { activeUser } = this.state;
    const { handleSubmit, join } = this.props;

    const panes = [
      {
        menuItem: "specialist",
        menuValue: "specialist"
      },
      {
        menuItem: "client",
        menuValue: "customer"
      }
    ];

    const activeIndex = activeUser === "specialist" ? 0 : 1;

    return (
      <Fragment>
        <StyledFormHeader>
          <div className="form-title">Join</div>
          <div className="form-subtitle">
            Create an account and get started.
          </div>
        </StyledFormHeader>

        <StyledTabs widthAuto action="">
          <Tab
            menu={{ text: true }}
            panes={panes}
            activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
          />

          <StyledAuthForm attached={false}>
            <JoinForm
              handleSubmit={handleSubmit((values, dispatch, props) =>
                join(activeUser, values)
                  .then(({ data }) => {
                    localStorage.setItem("user_email", data.email);
                    localStorage.usertype = activeUser;
                    history.push("/confirm_email");
                  })
                  .catch(({ response: { data } }) => {
                    throw new SubmissionError({
                      email: data.errors[0]
                    });
                  })
              )}
            />
          </StyledAuthForm>
        </StyledTabs>

        <div className="bottom-annot">
          Already a member?&nbsp;
          <NavLink to="/sign_in">
            <b>Sign In</b>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

const withConnect = connect(
  null,
  {
    join
  }
);

const withForm = reduxForm({
  form: "JoinForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
});

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(JoinContainer);
