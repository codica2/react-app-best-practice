import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Tab } from "semantic-ui-react";

import SignInForm from "./SignInForm";

import StyledFormHeader from "@styled/forms/FormHeader";
import StyledTabs from "@styled/StyledTabs";
import StyledAuthForm from "@styled/forms/AuthForm";
import Loader from "@components/common/Loader";

import { login } from "@ducks/user/actions";
import { compose } from "redux";

class SignInContainer extends Component {
  state = {
    activeUser: this.props.usertype
  };

  static propTypes = {
    usertype: PropTypes.string,
    signInFail: PropTypes.bool,
    login: PropTypes.func.isRequired
  };

  static defaultProps = {
    usertype: localStorage.getItem("usertype") || "specialist",
    signInFail: false
  };

  handleTabChange = (ev, { activeIndex, panes }) => {
    this.setState({
      activeUser: panes[activeIndex].menuValue
    });
  };

  render() {
    const { activeUser } = this.state;
    const { handleSubmit, submitting, login, signInFail } = this.props;

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

    const activeIndex = activeUser === "customer" ? 1 : 0;

    return (
      <Fragment>
        <Loader loading={submitting} />

        <StyledFormHeader borderBottom>
          <div className="form-title">Sign in</div>
          <div className="form-subtitle">Welcome back!</div>
        </StyledFormHeader>

        <StyledTabs widthAuto action="" className="relative">
          <Tab
            menu={{ text: true }}
            panes={panes}
            activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
          />

          <StyledAuthForm attached={false}>
            <SignInForm
              user={activeUser}
              signInFail={signInFail}
              handleSubmit={handleSubmit(values => login(activeUser, values))}
            />
          </StyledAuthForm>
        </StyledTabs>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  usertype: user.type,
  signInFail: user.signInFail
});

const mapDispatchToProps = {
  login
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withForm = reduxForm({
  form: "SignInForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  initialValues: {
    email: localStorage.getItem("user_email")
  }
});

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(SignInContainer);
