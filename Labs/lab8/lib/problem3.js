var cat = document.getElementById("cat-pic");
var mustache = document.getElementById("mustache-pic");

function placeMustache(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  mustache.style.left = (x - 50) + "px";
  mustache.style.top = (y - 25) + "px";
}

cat.addEventListener("click", placeMustache);
