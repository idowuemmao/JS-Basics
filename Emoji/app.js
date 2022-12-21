const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

closedFace.addEventListener('click', ()=>{
     if (closedFace.classList.contains('active')){
        closedFace.classList.remove('active')
        openFace.classList.add('active')
     }
})

openFace.addEventListener('click', ()=> {
    if (openFace.classList.contains('active')){
        openFace.classList.remove('active')
        closedFace.classList.add('active')
    }
})