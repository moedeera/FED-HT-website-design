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
    dayMonth = "06/30/",
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

/// Testimonials
const testemonialsContainer = document.querySelector(".testimonials-container");
const testemonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Mark Matthews",
    position: "HTML/CSS Instructor",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I've taught hundreds of HTML/CSS developers. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
  {
    name: "James Kagawa",
    position: "ReactJS Instructor",
    photo:
      "https://cdn.pixabay.com/photo/2016/09/07/16/38/portrait-1652023_960_720.jpg",
    text: "This is the most fun I have had teaching. This boot camp really allows for teachers and students to connect and implement creative ways to learn",
  },
  {
    name: "Ian Smith",
    position: "Express/NodeJS Instructor",
    photo:
      "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg",
    text: "The key to this program is that we treat everyone uniquely according to how they learn. Students give us feedback on what works bast for them and we adopt accordingly",
  },
  {
    name: "Ria Schuman",
    position: "Design Instructor",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I've taught hundreds of HTML/CSS developers. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
  {
    name: "Jimmy Nunez",
    position: "Design Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I've taught hundreds of HTML/CSS developers. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
  {
    name: "Sheldon Lee",
    position: "Interview coach",
    photo:
      "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_960_720.jpg",
    text: "I've taught hundreds of HTML/CSS developers. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
  {
    name: "Vincent Sully",
    position: "Instructor",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "I've taught hundreds of HTML/CSS developers. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testemonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 9200);

// modal

// $(".clear-cookie").on("click", function () {
//   Cookies.remove("colorboxShown");
//   $(this).replaceWith("<p><em>Cookie cleared. Re-run demo</em></p>");
// });

function onPopupOpen() {
  document.getElementById("modal-content").style.display = "flex";
  // $("#yurEmail").focus();
}

function onPopupClose() {
  document.getElementById("modal-content").style.display = "none";
  // Cookies.set("colorboxShown", "yes", {
  //   expires: 1,
  // });
  // $(".clear-cookie").fadeIn();
  // lastFocus.focus();
}

// function displayPopup() {
//   $.colorbox({
//     inline: true,
//     href: "#modal-content",
//     className: "cta",
//     width: 850,
//     height: 450,
//     onComplete: onPopupOpen,
//     onClosed: onPopupClose,
//   });
// }

// var lastFocus;
// var popupShown = Cookies.get("colorboxShown");

// if (popupShown) {
//   console.log("Cookie found. No action necessary");
//   $(".clear-cookie").show();
// } else {
//   console.log("No cookie found. Opening popup in 3 seconds");
//   $(".clear-cookie").hide();
//   setTimeout(function () {
//     lastFocus = document.activeElement;
//     displayPopup();
//   }, 5000);
// }

setTimeout(function () {
  // lastFocus = document.activeElement;
  onPopupOpen();
}, 5000);

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal-content").style.display = "none";
});
