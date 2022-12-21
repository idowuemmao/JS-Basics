const addNote = document.getElementById("add-note")
const noteInput = document.getElementById("note-input")
const allOutput = document.getElementById("all-output")
const output = document.getElementById("output")

addNote.addEventListener("click", addNotes)

function addNotes(){
    const input = noteInput.value

    if ( input.trim() === ''){
        alert("Please enter a text...")
        noteInput.focus()
        return
    }


   const noteListing = 
        `
            <li class = 'out'>
                <p id='noteOutput'>${input.substring(0, 150)}</p>
                <button onclick="viewDetails('${input}')">View Details</button>
                <button onclick="Delete(this)">Delete</button>
            </li>
        `
    output.innerHTML += noteListing
    noteInput.focus()
    noteInput.value = ''
}


function viewDetails(input){
    alert(input)
}
function Delete(one){
    one.parentElement.remove()
}