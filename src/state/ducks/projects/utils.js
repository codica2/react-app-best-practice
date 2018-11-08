import { S_REDGUY, SPECIALIST, CLIENT } from "../../../utilities";

/**
 * Returns an object of project data
 *
 * @param  {object} payload project data
 * @param  {string} logo logo of the project. Optional parametr
 * @returns {object}
 */
export function postProject(auth, payload, logo = null) {
  const { id, role } = auth;

  let files = payload.file
    ? payload.file.map(({ document, title, size }) => {
        return {
          document,
          title,
          size,
          entity_type: "Project"
        };
      })
    : [];

  let skill_ids =
    payload["skills"] &&
    payload["skills"].map(skill => {
      return skill.value;
    });

  let specialistId = role === S_REDGUY ? id : null,
    status = null;

  if (payload["state"] === "draft") {
    status = payload["state"];
  } else if (specialistId) {
    status = "discovery";
  }

  return {
    name: payload["name"],
    customer_id: payload["customer_id"] || id,
    project_type_id: payload["project_type_id"] || null,
    red_guy_id: specialistId,
    description: payload["description"],
    user_story: payload["user_story"],
    state: status,
    business_requirements: payload["requirements"],
    business_rules: payload["rules"],
    deliverables: payload["criteria"],
    further_notes: payload["solution"],
    logo: logo,
    attached_files_attributes: files,
    team_attributes: {
      name: payload["name"],
      specialist_id: null,
      custom_team: false
    },
    skill_ids
  };
}

export const getProjectUrl = user => {
  const { id, type } = user;
  switch (type) {
    case SPECIALIST:
      return `/specialists/${id}/projects`;
    case CLIENT:
      return `/projects?customer_id=${id}`;
    default:
      return;
  }
};
