import { createSelector } from "reselect";
import filter from "lodash/filter";

const projects = projects => projects.allIds.map(id => projects.byId[id]);

export const getSortedProjects = (...filters) =>
  createSelector(projects, projects =>
    filter(projects, project =>
      filters.some(filter => filter === project.state)
    )
  );

export const getProjectsEpics = () =>
  createSelector(projects, projects => {
    let allEpics = [];
    projects.forEach(project => allEpics.push(...project.epics));
    return allEpics;
  });
