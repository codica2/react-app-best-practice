import { renameObjPropNames } from "../../../utilities";

export function prepareSkillsForSelect(skills) {
  skills.forEach(skill => {
    renameObjPropNames(skill, "id", "value");
    renameObjPropNames(skill, "name", "label");
  });
  skills.sort((a, b) => {
    if (a.label < b.label) return -1;
    else if (a.label > b.label) return 1;
    else return 0;
  });
  return skills;
}
