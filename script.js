const signupForm = document.querySelector("[data-form]");
const passInput = document.querySelector("[data-password]");
const confirmPassInput = document.querySelector("[data-confirm-password]");

let passValue = "";
let confirmPassValue = "";

const passMismatch = () => {
  passInput.classList.add("error");
  confirmPassInput.classList.add("error");
};

passInput.addEventListener("change", (e) => {
  passValue = e.target.value;
});

confirmPassInput.addEventListener("change", (e) => {
  confirmPassValue = e.target.value;
  if (passValue !== confirmPassValue) passMismatch();
  console.log(passValue, confirmPassValue);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
});
