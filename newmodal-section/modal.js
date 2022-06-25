const cancelBtn = document.getElementById("cancel");
const openBtn = document.getElementById("book-now");

cancelBtn.addEventListener("click", () => {
  document.getElementById("bookNowModal").style.display = "none";
});
openBtn.addEventListener("click", () => {
  document.getElementById("bookNowModal").style.display = "block";
});
