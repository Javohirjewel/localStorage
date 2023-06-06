let inp = document.querySelector('.input')
let but = document.querySelector('.button')
let result = document.querySelector('.result')

function local(){
    but.addEventListener('click', () => {
        localStorage.user = JSON.stringify({name: `${inp.value}`});
        let user = JSON.parse( localStorage.user );
        result.innerHTML += user.name
        inp.value = ''
    })
}
local()