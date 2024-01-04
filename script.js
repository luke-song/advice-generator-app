const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");

window.onload = showQuote;

dice.addEventListener("click", () => {
  showQuote();
});

// function showQuote() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => response.json())
//     .then((data) => data.slip)
//     .then((data) => {
//       adviceNum.textContent = data.id;
//       adviceText.textContent = data.advice;
//     })
//     .catch((error) => {
//       alert(`Error ${error}`);
//     });
// }

async function showQuote() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceNum.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    alert(`Error ${error}`);
  }
}
