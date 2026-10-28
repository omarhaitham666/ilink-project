
import "../../styles/main.scss";

import {
  initPasswordToggles,
  showFieldError,
  showFormStatus
} from "../features/auth/auth.ui";

import {
  validateEmail,
  validatePassword
} from "../features/auth/auth.validation";

initPasswordToggles();

const form = document.querySelector<HTMLFormElement>("#register-form");

form?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const name = document.querySelector<HTMLInputElement>("#name");
  const email = document.querySelector<HTMLInputElement>("#email");
  const password = document.querySelector<HTMLInputElement>("#password");
  const confirm = document.querySelector<HTMLInputElement>("#confirm-password");

  if (!name || !email || !password || !confirm) return;

  const errors: Record<string, string> = {
    name: name.value.trim().length < 2
      ? "Please enter your full name."
      : "",
    email: !validateEmail(email.value.trim())
      ? "Please enter a valid email."
      : "",
    password: !validatePassword(password.value)
      ? "Password must be at least 8 characters."
      : "",
    "confirm-password": confirm.value !== password.value
      ? "Passwords do not match."
      : ""
  };

  Object.entries(errors).forEach(([field, message]) => {
    showFieldError(field, message);
  });

  if (Object.values(errors).some(Boolean)) {
    showFormStatus("Please correct the highlighted fields.", "error");
    return;
  }

  showFormStatus(
    "Form validated. Registration API coming next.",
    "success"
  );
});
