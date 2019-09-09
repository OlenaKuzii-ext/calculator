const display = document.querySelector('.calculator .display');

document.querySelectorAll('.number button').forEach(number=>number.addEventListener('click', numberPressed));

function numberPressed(ev) {
    display.value += ev.target.innerText;
}
let opers = document.querySelectorAll('.opers button')
opers.forEach(oper=>oper.addEventListener('click', operPressed));

function operPressed(ev) {
    let arr = display.value.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            clear();
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-") {
            clear();
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "*") {
            clear();
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "/") {
            clear();
        }
    }
    display.value += ev.target.innerText;
}
document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    let arr = display.value.split('');
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == '/' && arr[i + 1] == '0') {
            alert("На нуль ділити не можна!!!");
            return display.value = '';
        }
    }
    display.value = eval(display.value);
}

document.querySelector('.sqrt').addEventListener('click', sqrtPressed);

function sqrtPressed() {
    display.value = Math.sqrt(eval(display.value));
}
document.querySelector('.cos').addEventListener('click', cosPressed);

function cosPressed() {
    display.value = Math.cos(eval(display.value));
}
document.querySelector('.sin').addEventListener('click', sinPressed);

function sinPressed() {
    display.value = Math.sin(eval(display.value));
}
document.querySelector('.ln').addEventListener('click', lnPressed);

function lnPressed() {
    display.value = Math.log(eval(display.value));
}
document.querySelector('.factorial').addEventListener('click', factorialPressed);

function factorialPressed() {
    let n = eval(display.value);
    if (n < 0) {
        alert("Факторіалу від'ємних чисел не існує");
        display.value = '';
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        display.value = result;
    }
}
document.querySelector('.deleteall').addEventListener('click', deleteallPressed);

function deleteallPressed() {
    display.value = "";
}
document.querySelector('.delete').addEventListener('click', deletePressed);

function deletePressed() {
    let arr = display.value.split('');
    let a = arr.pop();
    display.value = arr.join('');
}
