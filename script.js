var filters = [];
var merchList = document.querySelectorAll(".merchandise div");
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
  filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  filters = [];
  filters.push(filterino);
  sessionStorage.setItem("filters", JSON.stringify(filters));
  window.location.href = 'storefront.html';
  // console.log(filterino);
  // console.log(filters);
  qualifyItems();
}

function qualifyItems() {
  filters = JSON.parse(sessionStorage.getItem("filters")) || [];
  var merchList = document.querySelectorAll(".merchandise div");
  // console.log(merchList);
  for (var i = 0; i < merchList.length; i++) {
    merchList[i].style.display = "block";
    // console.log(merchList[i]);
    for (var j = 0; j < filters.length; j++) {
      if (!merchList[i].dataset.list.includes(filters[j]))
        {
        merchList[i].style.display = "none";
        console.log("start true (hide) analysis");
        console.log(merchList[i]);
        console.log(filters[j]);
        console.log(merchList[i].dataset.list);
        console.log(merchList[i].dataset.list.includes(filters[j]));
        console.log(merchList[i].style.display);
        console.log("end true (hide) analysis");

        }
      else {
        merchList[i].style.display = "block";
        console.log("start else (show) analysis");
        console.log(merchList[i]);
        console.log(filters[j]);
        console.log(merchList[i].dataset.list);
        console.log(merchList[i].dataset.list.includes(filters[j]));
        console.log(merchList[i].style.display);
        console.log("end else (show) analysis");
      }
      // console.log(merchList[i]);
      //recommitt0
      //doublerecom
    } 
  }
}
