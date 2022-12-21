const nameInput = document.getElementById("name")
const dateInput = document.getElementById("date")
const amountInput = document.getElementById("amount")
const addExpense = document.getElementById("expense")
const output = document.getElementById("entries")
const clearAll = document.querySelector(".clearAll")
const message = document.getElementById("message")

addExpense.addEventListener("click", addNewExpenses)
clearAll.addEventListener('click', AllClear)
message.textContent = "No expenses added yet!"
let number = 1

function addNewExpenses() {    
    let newName = nameInput.value
    let newDate = dateInput.value
    let newAmount = amountInput.value
    if (newName === '' || newDate === '' || newAmount === ''){
        if (newName === ''){
            alert("kindly enter a name")
            output.innerHTML = ""
            nameInput.focus()
        }
        if (newDate === ''){
            alert("Kindly enter a date")
            output.innerHTML = ""
            dateInput.focus()
        }
        if (newAmount === ''){
            alert("Kindly enter an amount")
            output.innerHTML = ""
            amountInput.focus()
        }
    }
    else{
        let allExpense = 
        `
        <tr id="outputexp">
            <td>${number}</td>
            <td>${newName}</td>
            <td>${newDate}</td>
            <td>${newAmount}</td>
            <td><button onclick='remove(this)'>&times</button></td>
        <tr>
        `
        number += 1
        output.innerHTML += allExpense
        
        nameInput.value = ''
        dateInput.value = ''
        amountInput.value = ''
        message.textContent = ''
    }
}

function AllClear(){
    output.textContent = ''
    message.textContent = "No expenses added yet!"
    number = 1
}

function remove(one){
    output.deleteRow(one)
    if(output.textContent === ''){
        message.textContent = "No expenses added yet!"
    }
}