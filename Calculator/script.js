const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')

const resultsOutput = document.querySelector('.result')
const workingOutput = document.querySelector('.working')


keys.addEventListener("click", (s) => {
    if (s.target.matches('button')){
        //use data-action attribute to determine the type of key that is clicked
        const key = s.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const outputDiplay = workingOutput.textContent
        const previousKeyType = calculator.dataset.previousKeyType 
        //if the keys doesn't have a data-action it must be a number
        if (!action){
            if(outputDiplay === '' || previousKeyType === 'operator'){
                workingOutput.textContent = keyContent
            }
            else{
                workingOutput.textContent = outputDiplay + keyContent
            }
            calculator.dataset.previousKeyType = 'number'
        }
        if(action ==='add' || action === 'percent' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            const firstInput = calculator.dataset.firstInput
            const operator = calculator.dataset.operator
            const secondInput = outputDiplay

            //Note: it's sufficient to check for firstValue and operator because secondValue always exists
            if (firstInput && operator && previousKeyType !== 'operator'){
                const calcValue = calculate(firstInput, operator, secondInput)
                resultsOutput.textContent = calcValue
                //update calculated value as firstInput
                calculator.dataset.firstInput = calcValue
            }
            else {
                //if there are no calculations, set outputdisplay as the firstinput
                calculator.dataset.firstInput = outputDiplay
            }

            //add the add-operator class when i click an operator
            key.classList.add('add-operator')

            calculator.dataset.previousKeyType = 'operator'
            
            //to remove the pressed state, we remove the add-operator class from all keys through a forEach loop
            // Array.from(key.parentNode.children)
            // .forEach(a => a.classList.remove ('add-operator'))
            // calculator.dataset.firstInput = outputDiplay
            calculator.dataset.operator = action
        }
        if (action === 'decimal'){
                //ensure you can't enter '.' more than once 
            if(!outputDiplay.includes('.')){
                workingOutput.textContent = outputDiplay + "."
            }
            else if (previousKeyType === 'operator'){
                workingOutput.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'
        }
        
        if (action === 'clear'){
            // workingOutput.textContent.lastIndexOf(outputDiplay.value, 3) = ""
            
        }
        if (action === 'calculate'){
            const firstInput = calculator.dataset.firstInput
            const operator = calculator.dataset.operator
            const secondInput = outputDiplay
            if (firstInput){
                resultsOutput.textContent = calculate(firstInput, operator, secondInput)
            }
            // resultsOutput.textContent = calculate(firstInput, operator, secondInput)
            calculator.dataset.previousKeyType = 'calculate'
        }
        if (action === 'clearAll'){
            workingOutput.textContent = ""
            resultsOutput.textContent = ""
            calculator.dataset.previousKeyType = 'clearAll'
        }
        if (action === 'doublezero'){
            workingOutput.textContent = outputDiplay + "00"
            calculator.dataset.previousKeyType = 'doublezero'
        }
    }
})

const calculate = (n1, operator, n2) => {
    let results = ''
    if (operator === 'add'){
        results = parseFloat(n1) + parseFloat(n2)
    }
    else if (operator === 'subtract'){
        results = parseFloat(n1) - parseFloat(n2)
    }
    else if (operator === 'divide'){
        results = parseFloat(n1) / parseFloat(n2)
    }
    else if (operator === 'multiply'){
        results = parseFloat(n1) * parseFloat(n2)
    }
    else if  (operator === 'percent'){
        results = parseFloat(n1) * 1/100
    }

    return results
}