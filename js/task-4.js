const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = formEl.getElementsByTagName("input");
  const login = inputs[0];
  const password = inputs[1];

  if (login.value === "" || password.value === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {};

  formEl.querySelectorAll("input").forEach((input) => {
    data[input.name] = input.value.trim();
  });
  console.log(data);

  formEl.reset();
});
