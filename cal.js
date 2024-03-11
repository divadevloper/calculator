let u = document.getElementById("u")
let uu = document.getElementById("result")
let operator = '';
let result = '';
const display = (a) => {
    u.innerHTML += a
}
function operators(a) {
    u.innerHTML += '' + a + '';
    operator = a
}
function calculate() {
    let expression = u.innerHTML.trim();
    let operands = expression.split('' + operator + '');
    let x = parseFloat(operands[0])
    let y = parseFloat(operands[1])


    switch (operator) {
        case '+':
            result = x + y
            break
        case '-':
            result = x - y
            break
        case '÷':
            result = x / y
            break
        case '*': result = x * y
            break
        case '%':
          result = x % y
        case 'x^':
            result = Math.pow(x, 2);

    }

    uu.innerHTML = result;
}