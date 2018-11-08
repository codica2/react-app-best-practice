import { createSelector } from "reselect";

const getEpics = state => state.epics;

const getProject = (state, props) => {
  const { projectId } = props.match.params;
  return state.projects.byId[projectId];
};

export const getProjectEpics = createSelector(
  [getEpics, getProject],
  (epics, project) => project && project.epics.map(id => epics.byId[id])
);
