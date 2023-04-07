let flag = 0
let win = 0

function clickbutton(event) {
    buttonclick = event.target.innerHTML
    if (flag == 0) {
        event.target.innerHTML = 'X'
        flag = 1
    }
    else {
        event.target.innerHTML = 'O'
        flag = 0
    }

    let btn1 = document.getElementById("1").innerHTML;
    let btn2 = document.getElementById("2").innerHTML;
    let btn3 = document.getElementById("3").innerHTML;
    let btn4 = document.getElementById("4").innerHTML;
    let btn5 = document.getElementById("5").innerHTML;
    let btn6 = document.getElementById("6").innerHTML;
    let btn7 = document.getElementById("7").innerHTML;
    let btn8 = document.getElementById("8").innerHTML;
    let btn9 = document.getElementById("9").innerHTML;

    if (((btn1 == 'X' && btn2 == 'X' && btn3 == 'X') ||
        (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') ||
        (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') ||
        (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') ||
        (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') ||
        (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') ||
        (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') ||
        (btn3 == 'X' && btn5 == 'X' && btn7 == 'X')) && win == 0) {
        document.getElementById("message").innerHTML = "X WINS"
        win = 1
    }
    if (((btn1 == 'O' && btn2 == 'O' && btn3 == 'O') ||
        (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') ||
        (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') ||
        (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') ||
        (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') ||
        (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') ||
        (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') ||
        (btn3 == 'O' && btn5 == 'O' && btn7 == 'O')) && win == 0) {
        document.getElementById("message").innerHTML = "O WINS"
        win = 1
    }

}
function clickreset(event) {
    buttons = document.querySelectorAll(".XO")
    buttons.forEach(function (button) {
        button.innerHTML = "&nbsp;";
    })
    document.getElementById("message").innerHTML = '&nbsp;'
    flag = 0
    win = 0
}