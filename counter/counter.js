var countEl = document.querySelector(".count-students");
var countEl2 = document.querySelector(".count-students2");
var countEl3 = document.querySelector(".count-days");
var x = 1800;
var x2 = 1000;
var x3 = 90;
var y = countEl.dataset.to;
var y2 = countEl2.dataset.to;
var y3 = countEl3.dataset.to;

function countUp() {
  function addNum() {
    countEl.innerHTML = x;
    countEl2.innerHTML = x2;
    x += 1;
    x2 += 1;

    if (x > y && x2 > y2) {
      clearInterval(timer);
    }
  }

  var timer = window.setInterval(addNum, 0.1);
  //   var toggleBtn = document.querySelector(".repeat-btn");
  //   toggleBtn.addEventListener("click", function () {
  //     countUp();
  //     toggleBtn.classList.add("hidden");
  //   });
}

function countDown() {
  function addNum() {
    countEl3.innerHTML = x3;

    x3 -= 1;
    if (x3 < y3) {
      clearInterval(timer);
    }
  }

  var timer = window.setInterval(addNum, 50);
  //   var toggleBtn = document.querySelector(".repeat-btn");
  //   toggleBtn.addEventListener("click", function () {
  //     countUp();
  //     toggleBtn.classList.add("hidden");
  //   });
}

countUp();
countDown();
// countUp2();
