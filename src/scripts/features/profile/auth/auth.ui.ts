
export function initPasswordToggles(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    "[data-password-toggle]"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      if (!target) return;

      const input = document.getElementById(target);

      if (!(input instanceof HTMLInputElement)) return;

      const isHidden = input.type === "password";

      input.type = isHidden ? "text" : "password";
      button.textContent = isHidden ? "Hide" : "Show";
      button.setAttribute("aria-pressed", String(isHidden));
      button.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
      );
    });
  });
}

export function showFieldError(
  fieldId: string,
  message: string
): void {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);

  if (input) {
    input.setAttribute("aria-invalid", String(Boolean(message)));
  }

  if (error) {
    error.textContent = message;
  }
}

export function showFormStatus(
  message: string,
  type: "success" | "error"
): void {
  const status = document.getElementById("form-status");
  if (!status) return;

  status.textContent = message;
  status.className = `form-status is-${type}`;
}
