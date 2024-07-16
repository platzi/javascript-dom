const button = document.querySelector("button");

const buttonClicked = (event) => {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.textContent);
};

button.addEventListener("click", buttonClicked);
