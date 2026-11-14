
 // scripts/features/settings/settings.privacy&security.ts

export function renderPrivacySettings(): string {

  // Privacy Options
  const privacyOptions = [
    {
      id: "private-account",
      icon: "fa-solid fa-shield-halved",
      title: "Private Account",
      description: "Only approved followers can see your content.",
      active: true,
    },
    {
      id: "activity-status",
      icon: "fa-solid fa-comment-dots",
      title: "Show Activity Status",
      description: "Let others see when you're active.",
      active: true,
    },
    {
      id: "read-receipts",
      icon: "fa-regular fa-envelope",
      title: "Read Receipts",
      description: "Let others know when you've read their messages.",
      active: true,
    },
  ];

  // Security Options
  const securityOptions = [
    {
      id: "change-password",
      icon: "fa-solid fa-lock",
      title: "Change Password",
      description: "",
    },
    {
      id: "two-factor",
      icon: "fa-solid fa-shield-halved",
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security.",
    },
    {
      id: "active-sessions",
      icon: "fa-solid fa-desktop",
      title: "Active Sessions",
      description: "Manage devices where you're logged in.",
    },
  ];

  // Render Privacy Options
  const privacyHTML = privacyOptions
    .map(
      (option) => `
        <div class="privacy-item">

          <div class="privacy-item__icon">
            <i class="${option.icon}"></i>
          </div>

          <div class="privacy-item__info">
            <h3 class="privacy-item__title">${option.title}</h3>
            <p class="privacy-item__description">${option.description}</p>
          </div>

          <button
            type="button"
            class="privacy-toggle ${option.active ? "is-active" : ""}"
            data-privacy-toggle="${option.id}"
            aria-label="${option.title}"
            aria-pressed="${option.active}"
          >
            <span class="privacy-toggle__circle"></span>
          </button>

        </div>
      `
    )
    .join("");

  // Render Security Options
  const securityHTML = securityOptions
    .map(
      (option) => `
        <button
          type="button"
          class="privacy-security-item"
          data-security-action="${option.id}"
        >

          <div class="privacy-security-item__icon">
            <i class="${option.icon}"></i>
          </div>

          <div class="privacy-security-item__info">
            <h3 class="privacy-security-item__title">${option.title}</h3>

            ${
              option.description
                ? `<p class="privacy-security-item__description">${option.description}</p>`
                : ""
            }
          </div>

          <i class="fa-solid fa-chevron-right privacy-security-item__arrow"></i>

        </button>
      `
    )
    .join("");

  return `
    <div class="settings-card privacy-card">

      <!-- Privacy Header -->
      <div class="settings-card__header">
        <h2>Privacy & Security</h2>
        <p>Control your privacy and keep your account safe.</p>
      </div>

      <!-- Privacy Cover -->
      <div class="privacy-cover">
        <img
         src="/assets/settings/privacy-security-cover.png"
          alt="Privacy and Security Cover"
          class="privacy-cover__image"
        />
      </div>

      <!-- Privacy Settings -->
      <section class="privacy-section">

        <h3 class="privacy-section__title">
          Privacy Settings
        </h3>

        <div class="privacy-list">
          ${privacyHTML}
        </div>

      </section>

      <!-- Account Security -->
      <section class="privacy-section">

        <h3 class="privacy-section__title">
          Account Security
        </h3>

        <div class="privacy-security-list">
          ${securityHTML}
        </div>

      </section>

    </div>
  `;
}
