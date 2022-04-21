// const loginPage = document.querySelector('#modal')
// const LoginButton = document.querySelector('#LogBtn')
// const form = document.querySelector('#form-modal')
// const exit = document.querySelector('#exit')
// const LoginBtnSm = document.querySelector('#Login2')

// loginPage.addEventListener('click', (e)=>{

// e.preventDefault()

// if (e.target === exit ){

// loginPage.classList.add('no-show')
// }

// })

// LoginButton.addEventListener('click', (e)=>{

// e.preventDefault()
// loginPage.classList.remove('no-show')

// }
// )

// LoginBtnSm.addEventListener('click', (e)=>{

//     e.preventDefault()
//     loginPage.classList.remove('no-show')

//     }
//     )

var card1 = document.querySelector(".middleline");
var card2 = document.querySelector(".bottomline");
var card3 = document.querySelector(".outro");
var card4 = document.querySelector(".c-l");
const btn1 = document.getElementById("learn-more-1");
const btn2 = document.getElementById("learn-more-2");
const btn3 = document.getElementById("learn-more-3");
const btn4 = document.getElementById("learn-more-4");
const rtn1 = document.getElementById("rtn-1");
const rtn2 = document.getElementById("rtn-2");
const rtn3 = document.getElementById("rtn-3");
const rtn4 = document.getElementById("rtn-4");
const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-150px",
};

// const observer = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     // console.log(entries[0].target);
//     entries[0].target.classList.remove("show");
//   } else {
//     // console.log(entries[0].target, " is out of page");
//     entries[0].target.classList.add("show");
//   }
// }, options);

// const observer2 = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     // console.log(entries[0].target);
//     entries[0].target.classList.remove("appear");
//   } else {
//     // console.log(entries[0].target, " is out of page");
//     entries[0].target.classList.add("appear");
//   }
// }, options);

// observer.observe(card1);
// observer.observe(card2);
// observer.observe(card3);
// observer2.observe(card4);

btn1.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi1").style.left = "0";
});

rtn1.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi1").style.left = "100%";
});

btn2.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi2").style.left = "0";
});

rtn2.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi2").style.left = "100%";
});

btn3.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi3").style.left = "0";
});

rtn3.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi3").style.left = "100%";
});

btn4.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi4").style.left = "0";
});

rtn4.addEventListener("click", (e) => {
  console.log("you clicked");
  document.getElementById("pi4").style.left = "100%";
});
