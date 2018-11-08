export const getFiles = files => {
  if (files)
    return files.map(({ document, title, size }) => ({
      document,
      title,
      size,
      entity_type: "Module"
    }));
  else return [];
};
