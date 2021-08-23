const loginPage = document.querySelector('#modal')
const LoginButton = document.querySelector('#LogBtn')
const form = document.querySelector('#form-modal')
const exit = document.querySelector('#exit')
const LoginBtnSm = document.querySelector('#Login2')


loginPage.addEventListener('click', (e)=>{

e.preventDefault()

if (e.target === exit ){

loginPage.classList.add('no-show')
}

})


LoginButton.addEventListener('click', (e)=>{

e.preventDefault()
loginPage.classList.remove('no-show')

}
)


LoginBtnSm.addEventListener('click', (e)=>{

    e.preventDefault()
    loginPage.classList.remove('no-show')
    
    }
    )