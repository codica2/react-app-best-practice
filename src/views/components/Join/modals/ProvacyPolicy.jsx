import React from "react";
import { Header, Modal } from "semantic-ui-react";

const PrivacyPolicy = () => (
  <Modal
    trigger={<span className="privacy-bold">privacy policy</span>}
    closeIcon
  >
    <Modal.Header>Privacy Policy</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Please read this information</Header>
        <p>This information will be soon</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default PrivacyPolicy;
