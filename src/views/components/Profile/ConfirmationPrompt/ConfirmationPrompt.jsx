import React from "react";
import PropTypes from "prop-types";
import NavigationPrompt from "react-router-navigation-prompt";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { setPromptNextLocation } from "@ducks/modals/actions";
import ConfirmationModal from "./ConfirmationModal";

const ConfirmationPrompt = ({
  shouldConfirm,
  formId,
  setPromptNextLocation
}) => (
  <NavigationPrompt
    when={(crntLocation, nextLocation) => {
      if (shouldConfirm) setPromptNextLocation(nextLocation);
      return shouldConfirm;
    }}
  >
    {({ onConfirm, onCancel }) => (
      <ConfirmationModal
        isOpen={true}
        formId={formId}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    )}
  </NavigationPrompt>
);

ConfirmationPrompt.propTypes = {
  shouldConfirm: PropTypes.bool,
  formId: PropTypes.string
};

ConfirmationPrompt.defaultProps = {
  shouldConfirm: false,
  formId: ""
};

const withConnect = connect(
  null,
  {
    setPromptNextLocation
  }
);

const enhance = compose(
  withRouter,
  withConnect
);

export default enhance(ConfirmationPrompt);
