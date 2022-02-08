const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const result = currentResult + userInput.value;
    outputResult(result, '');
}

addBtn.addEventListener('click', add);