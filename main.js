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
var card0 = document.querySelector(".testimonial-page");
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

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // console.log(entries[0].target);
    document.getElementById("modal-content").style.display = "none";
  }
}, options);

// const observer2 = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     // console.log(entries[0].target);
//     entries[0].target.classList.remove("appear");
//   } else {
//     // console.log(entries[0].target, " is out of page");
//     entries[0].target.classList.add("appear");
//   }
// }, options);

// observer.observe(card0);
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

//
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("countdown").style.display = "none";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();

// function onPopupOpen() {
//   document.getElementById("modal-content").style.display = "flex";
//   // $("#yurEmail").focus();
// }

// function onPopupClose() {
//   document.getElementById("modal-content").style.display = "none";
//   // Cookies.set("colorboxShown", "yes", {
//   //   expires: 1,
//   // });
//   // $(".clear-cookie").fadeIn();
//   // lastFocus.focus();
// }

// document.getElementById("close").addEventListener("click", () => {
//   document.getElementById("modal-content").style.display = "none";
// });

// //book-now modal

// const bookNowBtn = document.getElementById("book-now");
// // const contactUs = document.getElementById("contact-us");

// const cancelBtn = document.getElementById("cancel");
// const cancelBtn2 = document.getElementById("cancel2");

// bookNowBtn.addEventListener("click", () => {
//   document.getElementById("bookNowModal").classList.remove("no-show");
// });

// // contactUs.addEventListener("click", () => {
// //   document.getElementById("Contact").classList.remove("no-show");
// // });

// cancelBtn.addEventListener("click", () => {
//   document.getElementById("bookNowModal").classList.add("no-show");
// });

// cancelBtn2.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("Contact").classList.add("no-show");
// });

// document.addEventListener("click", (e) => {
//   const data = [e.target.parentElement.classList];
//   console.log(e.target.parentElement.classList);
//   if (
//     !data[0].value.includes("booking-form") &&
//     !data[0].value.includes("booking-credit") &&
//     !data[0].value.includes("book-now") &&
//     !data[0].value.includes("Info") &&
//     !data[0].value.includes("contact-now")
//   ) {
//     document.getElementById("bookNowModal").classList.add("no-show");
//     document.getElementById("Contact").classList.add("no-show");
//   }
// });
