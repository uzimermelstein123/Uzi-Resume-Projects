let expression = '';
const test = (event) => {
    expression += event.target.value;
    if (event.target.value === '=') {
        expression = Math.round(eval(expression.substring(0, expression.length - 1)) * 100) / 100;
        document.getElementById('answer').innerHTML = expression;
    }
    if (expression == undefined) {
        document.getElementById('answer').innerHTML = ' ';
        expression = '';
    }
}
window.onload = () => {
    document.getElementById('C').onclick = () => {
        document.getElementById("answer").innerHTML = ' ';
        expression = '';
    }
}
    

