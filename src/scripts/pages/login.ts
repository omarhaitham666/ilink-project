
import "../../styles/main.scss";

import {
  initPasswordToggles,
  showFieldError,
  showFormStatus
} from "../features/auth/auth.ui";

import {
  validateEmail
} from "../features/auth/auth.validation";

initPasswordToggles();

const form = document.querySelector<HTMLFormElement>("#login-form");

form?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const email = document.querySelector<HTMLInputElement>("#email");
  const password = document.querySelector<HTMLInputElement>("#password");

  if (!email || !password) return;

  const emailValue = email.value.trim();
  const passwordValue = password.value;

  const emailError = !validateEmail(emailValue)
    ? "Please enter a valid email address."
    : "";

  const passwordError = !passwordValue
    ? "Password is required."
    : "";

  showFieldError("email", emailError);
  showFieldError("password", passwordError);

  if (emailError || passwordError) {
    showFormStatus("Please check your details.", "error");
    return;
  }

  showFormStatus(
    "Form validated. API integration coming next.",
    "success"
  );
});
