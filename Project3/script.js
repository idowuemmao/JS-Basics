// const circle = document.getElementById('circle')
// //THis means if circle doesn't contain the class hover i want to add it
// circle.addEventListener('mouseenter', ()=>{
//     if (!circle.classList.contains('hover')){
//         circle.classList.add('hover')
//     }
// })
// circle.addEventListener('mouseleave', ()=>{
//     if (circle.classList.contains('hover')){
//         circle.classList.remove('hover')
//     }
// })

let popUp = document.querySelector(".popup")
let navbar = document.querySelector('.navbar')

 popUp.addEventListener("click", ()=>{
    console.log("clicked")
    // if (!popUp.classList.contains('navbar')){
    //     popUp.classList.add('navbar')
    // }
    popUp.classList.toggle('navbar')
    navbar.classList.toggle('active')

 })
popUp.addEventListener("click", ()=>{
    if (popUp.classList.contains('navbar')){
        popUp.classList.remove('navbar')
    }

})

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times'); 
//     navbar.classList.toggle('active')
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times'); 
//     navbar.classList.remove('active')
// }