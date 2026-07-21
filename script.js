var filters = [];
var merchList = [];
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
function qualifyItems(item) {
  for (var i = 0; i < merchList.length; i++) {
    merchList[i].style.display = block;
    for (var j = 0; j < filters.length; j++) {
      if (merchList[i].List.indexOf(filters[j] = -1)
      {
        merchList[i].style.display = none;
      }
    } 
}
