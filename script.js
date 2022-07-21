const numberButtons = document.querySelectorAll(".number");
const opButtons = document.querySelector(".operator");
const allClearButton = document.querySelectorAll(".all-clear");
const deleteButton = document.querySelector(".delete");
const eqaulsButton = document.querySelector(".equals");
const previousOp = document.querySelector(".previous-op");
var currentOp = document.querySelector(".current-op");
const operator = document.querySelectorAll(".operator");
const signop = document.querySelector(".signop");

function changefunc() {
  $(decimal).attr("onclick", "dec2(decimal)");
  $(zero).attr("onclick", "zerofunc2(zero)");
  $(one).attr("onclick", "num2(one)");
  $(two).attr("onclick", "num2(two)");
  $(three).attr("onclick", "num2(three)");
  $(four).attr("onclick", "num2(four)");
  $(five).attr("onclick", "num2(five)");
  $(six).attr("onclick", "num2(six)");
  $(seven).attr("onclick", "num2(seven)");
  $(eight).attr("onclick", "num2(eight)");
  $(nine).attr("onclick", "num2(nine)");
}

function changefunc2() {
  $(decimal).attr("onclick", "dec(decimal)");
  $(zero).attr("onclick", "zerofunc(zero)");
  $(one).attr("onclick", "num(one)");
  $(two).attr("onclick", "num(two)");
  $(three).attr("onclick", "num(three)");
  $(four).attr("onclick", "num(four)");
  $(five).attr("onclick", "num(five)");
  $(six).attr("onclick", "num(six)");
  $(seven).attr("onclick", "num(seven)");
  $(eight).attr("onclick", "num(eight)");
  $(nine).attr("onclick", "num(nine)");
}

var one = numberButtons[6];
var two = numberButtons[7];
var three = numberButtons[8];
var four = numberButtons[3];
var five = numberButtons[4];
var six = numberButtons[5];
var seven = numberButtons[0];
var eight = numberButtons[1];
var nine = numberButtons[2];
var decimal = numberButtons[9];
var zero = numberButtons[10];

var _divide = operator[0];
var _multiply = operator[1];
var _subtract = operator[2];
var _add = operator[3];

function clearing() {
  previousOp.innerHTML = "";
  currentOp.innerHTML = "";
  signop.innerHTML = "";
  changefunc2();
}
// clear

function del() {
  if (currentOp.innerHTML.length > 0) {
    currentOp.innerHTML = currentOp.innerHTML.slice(0, -1);
  } else {
    previousOp.innerHTML = previousOp.innerHTML.slice(0, -1);
  }
}

function dec(num) {
  if (previousOp.innerHTML.includes(".")) {
  } else previousOp.innerHTML += num.innerHTML;
}
function dec2(num) {
  if (currentOp.innerHTML.includes(".")) {
  } else currentOp.innerHTML += num.innerHTML;
}

function zerofunc(num) {
  if (+previousOp.innerHTML > 1e-10) previousOp.innerHTML += num.innerHTML;
}
function zerofunc2(num) {
  if (+currentOp.innerHTML > 1e-10) currentOp.innerHTML += num.innerHTML;
}

function num(num) {
  previousOp.innerHTML += num.innerHTML;
}

function num2(num) {
  currentOp.innerHTML += num.innerHTML;
}

function signfunc(sign, func) {
  if (previousOp.innerHTML.length > 0)
    {    signop.innerHTML = sign.innerHTML;

    changefunc();}
    if (previousOp.innerHTML.length <1 & currentOp.innerHTML.length >0){
        signop.innerHTML = sign.innerHTML;

    }


  
    }


function equals() {
  var i = previousOp.innerHTML;
  var p = currentOp.innerHTML;
  if (signop.innerHTML == "+") {
    currentOp.innerHTML = +i + +p;
  }

  if (signop.innerHTML == "÷") {
    currentOp.innerHTML = +i / +p;
  }

  if (signop.innerHTML == "x") {
    currentOp.innerHTML = +i * +p;
  }

  if (signop.innerHTML == "-") {
    currentOp.innerHTML = +i - +p;
  }
  previousOp.innerHTML = "";
  signop.innerHTML = "";
  changefunc2()
}
