var filters = [];
var merchList = document.querySelectorAll(".merch");
function navHome() {
  window.location.href = 'index.html';
  filters = [];
  console.log("running nav");
}
// function filteradd(filterino) {
//   const filters = JSON.parse(sessionStorage.getItem("filters")) || [];
//   if (!filters.includes(filterino)) {
//       filters.push(filterino);
//       sessionStorage.setItem("filters", JSON.stringify(filters));
//       window.location.href = 'storefront.html';
//   }
//   else if (filters.includes(filterino)) {
//     filters.splice(filters.indexOf(filterino), 1);
//     sessionStorage.setItem("filters", JSON.stringify(filters));
//   }
//   console.log(filterino);
//   console.log(filters);
// }
function filteradd(filterino) {
  const filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  filters = (filterino);
  sessionStorage.setItem("filters", JSON.stringify(filters));
  window.location.href = 'storefront.html';
  qualifyItems
  console.log(filterino);
  console.log(filters);
  qualifyItems();
}

function qualifyItems() {
  const filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  for (var i = 0; i < merchList.length; i++) {
    merchList[i].style.display = "block";
    for (var j = 0; j < filters.length; j++) {
      if (merchList[i].dataset.list.contains(filters[j]) == False)
      console.log(merchList[i]);
      console.log(filters[j]);
        {
         merchList[i].style.display = "none";
        }
      console.log(merchList[i]);
      //recommitt
    } 
  }
}
