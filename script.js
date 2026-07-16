var filters = [];
function filteradd(filterino) {
  if (!filters.includes(filterino)) {
      filters.push(filterino);
  }
  else if (filters.includes(filterino)) {
    filters.splice(filters.index(filterino), 1);
  }
  console.log(filterino);
  console.log(filters);
}
