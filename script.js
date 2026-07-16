var filters = [];
function filteradd(filterino) {
  if (!filters.includes(filterino)) {
      filters.push(filterino);
      window.location.href = 'storefront.html';
  }
  else if (filters.includes(filterino)) {
    filters.splice(filters.indexOf(filterino), 1);
  }
  console.log(filterino);
  console.log(filters);
}
