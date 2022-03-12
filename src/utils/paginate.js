import _ from "lodash";

export function paginate(pageSize, currentPage, items) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
