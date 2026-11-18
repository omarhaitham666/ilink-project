
// ===================================
// iLink — Appearance Settings
// ===================================

export function renderAppearanceSettings(): string {

  // Theme Options
  const themeOptions = [
    {
      id: "light",
      icon: "fa-regular fa-sun",
      title: "Light",
      active: false,
    },
    {
      id: "dark",
      icon: "fa-regular fa-moon",
      title: "Dark",
      active: true,
    },
    {
      id: "system",
      icon: "fa-solid fa-desktop",
      title: "System",
      active: false,
    },
  ];

  // Render Theme Options
  const themeHTML = themeOptions
    .map(
      (theme) => `
        <button
          type="button"
          class="appearance-theme-option ${
            theme.active ? "is-active" : ""
          }"
          data-theme-option="${theme.id}"
          aria-pressed="${theme.active}"
        >

          <span class="appearance-theme-option__icon">
            <i class="${theme.icon}"></i>
          </span>

          <span class="appearance-theme-option__title">
            ${theme.title}
          </span>

          <span class="appearance-theme-option__check">
            <i class="fa-solid fa-check"></i>
          </span>

        </button>
      `
    )
    .join("");

  return `
    <div class="settings-card appearance-card">

      <!-- Appearance Header -->
      <div class="appearance-header">

        <button
          type="button"
          class="appearance-header__back"
          data-appearance-back
          aria-label="Go back"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>

        <h2 class="appearance-header__title">
          Appearance
        </h2>

      </div>

      <!-- Appearance Cover -->
      <div class="appearance-cover">

        <img
          src="/assets/settings/appearance-cover.png"
          alt="Appearance Cover"
          class="appearance-cover__image"
        />

      </div>

      <!-- Theme Section -->
      <section class="appearance-section">

        <h3 class="appearance-section__title">
          Theme
        </h3>

        <div class="appearance-theme-options">
          ${themeHTML}
        </div>

      </section>

    </div>
  `;
}
