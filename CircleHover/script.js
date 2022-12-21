let Data = [
    {
        name: 'Emmanuel',
        age: '30'
    },
    {
        name: 'Femi',
        age: '27'
    },
    {
        name: 'Tessy',
        age: '25' 
    },
    {
        name: 'Tobi',
        age: '22'
    },
    {
        name: 'Faith',
        age: '31'
    },
    {
        name: 'Adaeze',
        age: '34'
    }
];

const info = document.getElementById("info")

let details = Data.map(Datainfo)

function Datainfo(item){
    return (`<div>${item.name} is ${item.age} years old</div>`)
}
info.innerHTML = details.join('\n')