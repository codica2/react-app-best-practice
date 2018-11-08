import React from "react";
import history from "../../../history";

import { colors } from "@styled/constants/colors";
import { ColoredLinks } from "@styled/Home";
import StyledNotFound from "@styled/NotFound";

const NotFound = () => {
  document.title = "404 not found";
  return (
    <StyledNotFound>
      <h1>
        <ColoredLinks to="/" color={colors.purple}>
          404
        </ColoredLinks>
      </h1>
      <span>Page not found</span>
      <p>
        The Page you are looking for doesn't exist or other error
        occurred.&nbsp;
        <br />
        <ColoredLinks to="#" onClick={history.goBack} color={colors.lightBlue}>
          Go back{" "}
        </ColoredLinks>
        , or head over to{" "}
        <ColoredLinks to="/" color={colors.green}>
          This-site.com
        </ColoredLinks>{" "}
        to choose a new direction.
      </p>
      <p>{window.location.pathname}</p>
    </StyledNotFound>
  );
};

const ProjectNotFound = () => {
  document.title = "Project not found";
  return (
    <StyledNotFound>
      <h1>
        <ColoredLinks to="/" color={colors.purple}>
          404
        </ColoredLinks>
      </h1>
      <span>Project not found</span>
      <p>
        The Project, you trying to view is not exists or you do not have access
        to it.
        <br />
        <ColoredLinks to="#" onClick={history.goBack} color={colors.lightBlue}>
          Go back{" "}
        </ColoredLinks>
        , or head over to{" "}
        <ColoredLinks to="/" color={colors.green}>
          This-site.com
        </ColoredLinks>{" "}
        to choose a new direction.
      </p>
      <p>{window.location.pathname}</p>
    </StyledNotFound>
  );
};

const ModuleNotFound = () => {
  document.title = "Module not found";
  return (
    <StyledNotFound>
      <h1>
        <ColoredLinks to="/" color={colors.purple}>
          404
        </ColoredLinks>
      </h1>
      <span>Module not found</span>
      <p>
        The module, you've trying to view is not exists.
        <br />
        <ColoredLinks to="#" onClick={history.goBack} color={colors.lightBlue}>
          Go back{" "}
        </ColoredLinks>
        , or head over to{" "}
        <ColoredLinks to="/" color={colors.green}>
          This-site.com
        </ColoredLinks>{" "}
        to choose a new direction.
      </p>
      <p>{window.location.pathname}</p>
    </StyledNotFound>
  );
};

export { ProjectNotFound, ModuleNotFound };

export default NotFound;
