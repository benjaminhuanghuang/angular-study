const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  let text = event.target.value;

  if (isNaN(text)) {
    throw new Error("You must enter a number!");
  }
});

const logValue = (value) => {
  console.log(`Your value: ${value}`);
};
