console.log("hello");

const navigationDropDown = document.getElementById("drop-down-menu");
const dropDownLink = document.getElementById("drop-down-link");
const dropDownBtn = document.getElementById("dropDownBtn");
const closeNewNavModal = document.getElementById("nav-menu-close-btn");
const openNewNavModal = document.getElementById("nav-606");
const newNavModal = document.getElementById("nav-898");

let toggleDropDown = false;
let toggleMobileMenu = false;

dropDownLink.addEventListener("click", (e) => {
  if (toggleDropDown === false) {
    navigationDropDown.style.display = "block";
    dropDownBtn.style.transform = "rotate(180deg)";
    toggleDropDown = true;
    return;
  } else {
    navigationDropDown.style.display = "none";
    dropDownBtn.style.transform = "rotate(0deg)";
    toggleDropDown = false;
    return;
  }
});

window.addEventListener("click", (e) => {
  if (
    e.target.className !== "ddl" &&
    e.target.className !== "fa fa-chevron-down ddl"
  ) {
    navigationDropDown.style.display = "none";
    dropDownBtn.style.transform = "rotate(0deg)";
    toggleDropDown = false;
    return;
  }
});

closeNewNavModal.addEventListener("click", () => {
  newNavModal.style.transform = "translateX(-100%)";
  newNavModal.style.opacity = "0";

  document.getElementById("icon-606").style.transform = "rotate(0deg)";
});
openNewNavModal.addEventListener("click", () => {
  newNavModal.style.transform = "translateX(0%)";
  newNavModal.style.opacity = "1";
  document.getElementById("icon-606").style.transform = "rotate(90deg)";
});
