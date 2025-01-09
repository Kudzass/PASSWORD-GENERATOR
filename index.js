const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function getRandomCharacter(set) {
  return set[Math.floor(Math.random() * set.length)];
}
document.getElementById("generate").addEventListener("click", function () {

    const length = parseInt(document.getElementById("length").value);
  const includeUpper = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;