/**
 * Creates options for select
 *
 * @param  {number} start a start year
 * @param  {number} end uses to identify the finish date
 * @returns {array} an array of objects with label and value
 */

export function getYearsForSelect(start = 1960, end) {
  var startYear = start,
    years = [];

  while (startYear <= new Date().getFullYear()) {
    let item = {
      value: String(startYear),
      text: String(startYear)
    };
    startYear++;
    years.push(item);
  }

  if (end) {
    years.push({
      value: "Present",
      text: "Present"
    });
  }

  return years;
}
