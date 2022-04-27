// FUNCTIONS
function changeMode() {
  changeClasses();
  changeTexts();
}

function changeClasses() {
  button.classList.toggle("dark-mode");
  h1.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  console.log("MUDOU");
}

function changeTexts() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";
  if (button.classList.contains("dark-mode")) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }
  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

// CREATE ELEMENTS
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode);
