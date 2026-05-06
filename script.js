  const display = document.getElementById("display");

  // Append value to display
  function append(value) {
    display.value += value;
  }

  // Clear all
  document.getElementById("C").onclick = () => {
    display.value = "";
  };

  // Backspace
  document.getElementById("back").onclick = () => {
    display.value = display.value.slice(0, -1);
  };

  // Equals
  document.getElementById("equal").onclick = () => {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  };

  // Numbers
  for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).onclick = () => append(i);
  }

  // Operators
  document.getElementById("plus").onclick = () => append("+");
  document.getElementById("-").onclick = () => append("-");
  document.getElementById("*").onclick = () => append("*");
  document.getElementById("divi").onclick = () => append("/");
  document.getElementById("op").onclick = () => append("(");
  document.getElementById("cl").onclick = () => append(")");
  document.getElementById(".").onclick = () => append(".");