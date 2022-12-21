const submitButton = document.querySelector('.submit')
const inputText = document.querySelector('.addItem')
const clearButton = document.querySelector('.clearList')
const messageText = document.querySelector('.message')
const listItem = document.querySelector('.listing')

submitButton.addEventListener('click', submit)
clearButton.addEventListener('click', clear)

function submit(){
    let myTodo = inputText.value
    if (myTodo === ''){
        alert('Hello, your input is empty')
        messageText.textContent = 'Hello, your input is empty'
        inputText.focus()
    }
    else{
        let listTodo = 
            `<li>
                ${myTodo}
                <button onclick='removethis(this)'>&times</button>
                <button onclick='done'>Done</button>
            </li>` 
        listItem.innerHTML += listTodo
        inputText.value = ''
        messageText.textContent= ''
    }
}
function removethis(one){
    one.parentElement.remove()
}
function clear(){
    listItem.textContent = ''
}