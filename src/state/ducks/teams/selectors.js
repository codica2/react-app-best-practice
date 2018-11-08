import { createSelector } from "reselect";
import filter from "lodash/filter";
import findKey from "lodash/findKey";

const customTeams = teams => {
  switch (teams.constructor) {
    case Array:
      return teams.filter(team => team.custom_team);

    case Object:
      return filter(teams, team => team.custom_team);
    default:
      return [];
  }
};

const projectTeam = (teams, projectId) => {
  const key = findKey(teams, { project_id: +projectId });
  return teams[key];
};

export const getCustomTeams = () => createSelector(customTeams, teams => teams);
export const getProjectTeam = () => createSelector(projectTeam, team => team);
