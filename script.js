const signupForm = document.querySelector("[data-form]");
const passInput = document.querySelector("[data-password]");
const confirmPassInput = document.querySelector("[data-confirm-password]");

let passValue = "";
let confirmPassValue = "";
let passIsMatched = false;

const isPassMatching = () => {
  if (passValue !== confirmPassValue) {
    passInput.childNodes[3].classList.add("error");
    passInput.classList.add("error-msg");
    confirmPassInput.classList.add("error");
    passIsMatched = false;
  } else {
    passInput.childNodes[3].classList.remove("error");
    passInput.classList.remove("error-msg");
    confirmPassInput.classList.remove("error");
    passIsMatched = true;
  }
};

const passMismatch = (str) => {
  passInput.childNodes[3].classList.add("error");
  passInput.classList.add("error-msg");
  confirmPassInput.classList.add("error");
};

passInput.addEventListener("change", (e) => {
  passValue = e.target.value;
});

confirmPassInput.addEventListener("change", (e) => {
  confirmPassValue = e.target.value;
  isPassMatching();
});

signupForm.addEventListener("submit", (e) => {
  if (!passIsMatched) e.preventDefault();
});
