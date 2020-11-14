console.log('Hi')
import '../style/style.scss'

let yes_modalka = document.querySelector('#yes')
let no_modalka = document.querySelector('#no')
let modalka = document.querySelector('.modal-wrapper')

if(getComputedStyle(modalka).display == "flex") {
    yes_modalka.addEventListener('click', () => {
        modalka.style.display = "none"
        document.body.style.overflowY = "auto"
    })
    no_modalka.addEventListener('click', () => {
        window.close()
    })
}
