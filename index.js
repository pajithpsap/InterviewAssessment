document.addEventListener("DOMContentLoaded", function () {
  // RESIZING LOGIC FOR THE VERTICAL LINE
  var containers = document.querySelectorAll(".container");
  var lefts = document.querySelectorAll(".left");
  var resizes = document.querySelectorAll(".resize");

  var initialWidths = [];
  var initialX = [];
  var drag = false;

  // Initialize initialWidths and initialX arrays
  resizes.forEach(function (resize, index) {
    var left = lefts[index];
    initialWidths[index] = left.getBoundingClientRect().width;
    initialX[index] = 0;
  });

  // Event listeners for each resize handle
  resizes.forEach(function (resize, index) {
    var left = lefts[index];
    var container = containers[index];

    resize.addEventListener("mousedown", function (e) {
      drag = true;
      initialX[index] = e.clientX;
    });

    container.addEventListener("mousemove", function (e) {
      if (drag) {
        var deltaX = e.clientX - initialX[index];
        var newWidth = initialWidths[index] + deltaX;
        if (newWidth > 0) {
          // Adjust the width of both left panels
          lefts.forEach(function (left, i) {
            left.style.width = initialWidths[i] + deltaX + "px";
          });
          updateCenterPosition();
        }
      }
    });

    container.addEventListener("mouseup", function (e) {
      drag = false;
    });
  });

  /*****************************************************************************************/

  // RESIZING LOGIC FOR THE HORIZONTAL LINE
  var resizeH = document.querySelector(".resize-h");
  var initialHeights = [];
  var initialY = 0;
  var dragH = false;

  // Initialize initialHeights array
  containers.forEach(function (container, index) {
    initialHeights[index] = container.getBoundingClientRect().height;
  });

  // Event listeners for horizontal resize handle
  resizeH.addEventListener("mousedown", function (e) {
    dragH = true;
    initialY = e.clientY;
  });

  document.addEventListener("mousemove", function (e) {
    if (dragH) {
      var deltaY = e.clientY - initialY;
      var newHeightTop = initialHeights[0] + deltaY;
      var newHeightBottom = initialHeights[1] - deltaY;

      if (newHeightTop > 0 && newHeightBottom > 0) {
        containers[0].style.height = newHeightTop + "px";
        containers[1].style.height = newHeightBottom + "px";
        updateCenterPosition();
      }
    }
  });

  document.addEventListener("mouseup", function (e) {
    dragH = false;
  });

  /*****************************************************************************************/

  // FUNCTION TO UPDATE THE POSITION OF THE CENTER ELEMENT
  function updateCenterPosition() {
    var center = document.querySelector(".center");
    // var container1Rect = containers[0].getBoundingClientRect();
    var container1Rect = document
      .getElementById("item1")
      .getBoundingClientRect();
    var container2Rect = containers[1].getBoundingClientRect();

    // Calculate the x-coordinate of the intersection point
    var intersectionX = container1Rect.width;
    //console.log(intersectionX)

    // Calculate the y-coordinate of the intersection point
    var intersectionY =
      (container1Rect.top + container1Rect.height + container2Rect.top) / 2;

    // Set the position of the center element
    center.style.left = intersectionX + center.offsetWidth + "px";
    center.style.top = intersectionY - center.offsetHeight / 2 + "px";
  }

  // Initial positioning of the center element
  updateCenterPosition();
});

/*****************************************************************************************/

// Drag and Drop Logic

const cenEle = document.querySelector('#cen-ele');
const center = document.querySelector('.center');
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

// Set the draggable attribute to true for the center element
cenEle.draggable = true;

// Define dragstart event listener on cenEle
cenEle.addEventListener("dragstart", (e) => {
    // Set the data being dragged
    e.dataTransfer.setData("text", e.target.id);
});

// Define dragover event listener on item1
item1.addEventListener("dragover", (e) => {
    e.preventDefault();
});
item1.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
});

item2.addEventListener("dragover", (e) => {
    e.preventDefault();
});
item2.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
});

item3.addEventListener("dragover", (e) => {
    e.preventDefault();
});
item3.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
});

item4.addEventListener("dragover", (e) => {
    e.preventDefault();
});
item4.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
});

center.addEventListener("dragover", (e) => {
    e.preventDefault();
});
center.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
});