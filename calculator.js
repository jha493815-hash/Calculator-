const display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {

    display.value = eval(display.value);

}

// --- Keyboard support ---
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Numbers and dot
  if ((key >= "0" && key <= "9") || key === ".") {
    appendValue(key);
  }

  // Operators
  else if (["+", "-", "*", "/"].includes(key)) {
    appendValue(key);
  }

  // Enter → Calculate
  else if (key === "Enter") {
    calculate();
  }

  // Backspace → Delete last
  else if (key === "Backspace") {
    deleteLast();
  }

  // Escape → Clear
  else if (key === "Escape") {
    clearDisplay();
  }

  // Prevent default behavior for Enter and Backspace
  if (["Enter", "Backspace"].includes(key)) {
    event.preventDefault();
  }
});