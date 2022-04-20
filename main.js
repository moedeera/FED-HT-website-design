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
const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-350px",
};

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log(entries[0].target);
    entries[0].target.classList.remove("show");
  } else {
    console.log(entries[0].target, " is out of page");
    entries[0].target.classList.add("show");
  }
}, options);

observer.observe(card1);
observer.observe(card2);
observer.observe(card3);
