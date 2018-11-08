import React from "react";
import { Grid } from "semantic-ui-react";

import SpecialistCard from "./SpecialistCard";

const FilteredList = ({ filters, specialists, projectId, handleMessage }) => {
  const industry_area_id = specialist =>
    filters.industry_area_id
      ? specialist.industry_area_id === filters.industry_area_id
      : true;

  const hourly_rate = specialist =>
    specialist.hourly_rate >= filters.hourly_rate.min &&
    specialist.hourly_rate <= filters.hourly_rate.max;

  const experience_level_id = specialist =>
    filters.experience_level_id
      ? specialist.experience_level_id === filters.experience_level_id
      : true;

  const project_type = specialist =>
    filters.project_type
      ? filters.project_type === specialist.project_type_id
      : true;

  return (
    <Grid>
      <Grid.Row columns={3}>
        {specialists
          .filter(hourly_rate)
          .filter(industry_area_id)
          .filter(experience_level_id)
          .filter(project_type)
          .map((specialist, key) => (
            <Grid.Column key={key}>
              <SpecialistCard
                key={key}
                specialist={specialist}
                projectId={projectId}
              />
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

export default FilteredList;
