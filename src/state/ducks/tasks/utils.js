export const getFiles = files => {
  if (files)
    return files.map(({ document, title, size }) => ({
      document,
      title,
      size,
      entity_type: "Task"
    }));
  else return [];
};

export const getSpecialistIds = specialists => {
  const specialist_ids = [];

  specialists && specialists.split(",").forEach(id => specialist_ids.push(+id));
  return specialist_ids;
};
