const calcular = function (num1, num2) {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    selector = document.getElementById("selector").value
    let calculo = 0
    switch (selector) {
        case '+':
            calculo = (num1 + num2)
            document.getElementById("resultado").innerHTML = `O resultado da soma entre ${num1} + ${num2} = ${calculo}`
            break
        case '-':
            calculo = (num1 - num2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração entre ${num1} - ${num2} = ${calculo}`
            break
        case '*':
            calculo = (num1 * num2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação entre ${num1} x ${num2} = ${calculo}`
            break
        case '/':
            calculo = (num1 / num2)
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "Insira um divisível válido."
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da divisão entre ${num1} / ${num2} = ${calculo}`
                break
            }
    }
}
