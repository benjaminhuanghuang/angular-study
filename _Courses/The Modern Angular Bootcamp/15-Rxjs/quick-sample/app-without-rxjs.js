const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  let text = event.target.value;

  console.log(parsInt(text));
});
