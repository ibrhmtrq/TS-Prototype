var filters = [];
var merchList = document.querySelectorAll(".merch");
function filteradd(filterino) {
  const filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  if (!filters.includes(filterino)) {
      filters.push(filterino);
      sessionStorage.setItem("filters", JSON.stringify(filters));
      window.location.href = 'storefront.html';
  }
  else if (filters.includes(filterino)) {
    filters.splice(filters.indexOf(filterino), 1);
  }
  console.log(filterino);
  console.log(filters);
}
function qualifyItems(item) {
  const filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  for (var i = 0; i < merchList.length; i++) {
    merchList[i].style.display = "block";
    for (var j = 0; j < filters.length; j++) {
      if (merchList[i].List.indexOf(filters[j] = -1)
      {
        merchList[i].style.display = "none";
      }
    } 
  }
}
