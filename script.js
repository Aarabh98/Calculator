var screen = document.querySelector("display");
var btn = document.querySelectorAll(".btn");
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "x") {
      btntext = "*";
    }
    if (btntext == "÷") {
      btntext = "/";
    }
    display.value += btntext;
  });
}
// function sin() {
//   screen.value = Math.sin(screen.value);
// }
// function cos() {
//   screen.value = Math.cos(screen.value);
// }
// function tan() {
//   screen.value = Math.tan(screen.value);
// }
// function pow() {
//   screen.value = Math.pow(screen.value, 2);
// }
// function sqrt() {
//   screen.value = Math.sqrt(screen.value, 2);
// }
// function log() {
//   screen.value = Math.log(screen.value);
// }
// function pi() {
//   screen.value = 3.14159265359;
// }
// function e() {
//   screen.value = 2.718281828459045;
// }

function fact() {
  var i, num, f;
  f = 1;
  num = display.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}
// function backspc() {
//   screen.value = screen.value.substr(0, screen.value.length - 1);
// }

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  let expression = display.value;
  let result;

  try {
    // Convert trigonometric function inputs from degrees to radians
    expression = expression.replace(/sin\(/g, "sin(" + Math.PI / 180 + "*");
    expression = expression.replace(/cos\(/g, "cos(" + Math.PI / 180 + "*");
    expression = expression.replace(/tan\(/g, "tan(" + Math.PI / 180 + "*");

    result = math.evaluate(expression);
    display.value = result;
    // display.value = result.toFixed(4);
  } catch (error) {
    display.value = "Error";
  }
}

function squareRoot() {
  let display = document.getElementById("display");
  display.value += "sqrt(";
}

function base10Log() {
  let display = document.getElementById("display");
  display.value += "log(";
}

function pi() {
  let display = document.getElementById("display");
  display.value += "pi";
}

function e() {
  let display = document.getElementById("display");
  display.value += "e";
}

function power() {
  let display = document.getElementById("display");
  display.value += "^(";
}
