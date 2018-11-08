import React from "react";

import DueInfo from "./info/Due";
import ProjectsInfo from "./info/Projects";
import TasksInfo from "./info/Tasks";

import DashboardSubHeader from "./DashboardSubHeader";
import { Container } from "@styled/Containers";

import StyledDashboard from "./StyledDashboard";

const Dashboard = ({
  userRole,
  projects,
  allEpics,
  tasks,
  summary,
  getEtaForWeek,
  assignProjectName,
  renderDefault
}) => (
  <Container
    sidebarCondition
    dashboardContainer
    transparent
    className={projects.loading && "loading"}
  >
    <i className="fa fa-spinner fa-3x fa-pulse preloader" />

    <DashboardSubHeader dashboard userRole={userRole} />
    {projects.loaded && projects.allIds.length > 0 && (
      <StyledDashboard>
        <DueInfo
          allEpics={allEpics}
          tasks={tasks}
          getEtaForWeek={getEtaForWeek}
          assignProjectName={assignProjectName}
        />
        <ProjectsInfo summary={summary} projects={projects} />
        <TasksInfo
          summary={summary}
          allEpics={allEpics}
          tasks={tasks}
          getEtaForWeek={getEtaForWeek}
          assignProjectName={assignProjectName}
        />
      </StyledDashboard>
    )}
    {projects.loaded && projects.allIds.length === 0 && renderDefault()}
  </Container>
);

export default Dashboard;
