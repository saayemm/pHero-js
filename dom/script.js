// document.getElementById("item-2").addEventListener("click", function() {
//   console.log("You clicked on item 2");
// });

// document.getElementById("list").addEventListener("click", function() {
//   console.log("You clicked on the list");
// });

// document.getElementById("item-section").addEventListener("click", function() {
//   console.log("You clicked on the container");
// });

const items = document.querySelectorAll(".item");
  for(const item of items) {
    item.addEventListener("click", function(e) {
     e.target.parentNode.removeChild(e.target);
    });
  }