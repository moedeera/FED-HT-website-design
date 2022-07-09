const cancelBtn = document.getElementById("cancel");
const openBtn = document.getElementById("book-now");
const contactButtonN = document.getElementById("nav-contact-button");

let modalOpen = false;
let clickCount = 0;

cancelBtn.addEventListener("click", () => {
  document.getElementById("bookNowModal").style.display = "none";
  modalOpen = false;
});
openBtn.addEventListener("click", () => {
  document.getElementById("bookNowModal").style.display = "block";
  modalOpen = true;
});

contactButtonN.addEventListener("click", () => {
  document.getElementById("bookNowModal").style.display = "block";
  modalOpen = true;
});

window.addEventListener("click", (e) => {
  let insideClick = e.target.classList.contains("imc");

  console.log(modalOpen);

  if (!insideClick) {
    document.getElementById("bookNowModal").style.display = "none";
  }
});
