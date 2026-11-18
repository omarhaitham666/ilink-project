
// scripts/features/settings/settings.ui.ts

import { settingsSections } from "./settings.data";

import { renderAccountSettings } from "./settings.account";
import { renderPrivacySettings } from "./settings.privacy&security";
import { renderNotificationSettings } from "./settings.notification";
import { renderBlockedSettings } from "./settings.blocked";
import { renderAppearanceSettings } from "./settings.appearance"


// تحديد محتوى كل صفحة
export function renderSettingsContent(activeTab: string): string {

  switch (activeTab) {

    case "account":
      return renderAccountSettings();

    case "privacy":
      return renderPrivacySettings();

    case "notifications":
      return renderNotificationSettings();

    case "blocked":
      return renderBlockedSettings();

    case "appearance":
      return renderAppearanceSettings();


    default:
      return `
        <div class="settings-card">
          <div class="settings-card__header">
            <h2>${settingsSections.find(section => section.id === activeTab)?.label ?? "Settings"}</h2>
            <p>This settings page is coming soon.</p>
          </div>
        </div>
      `;
  }
}

// رسم صفحة Settings كاملة
export function renderSettings(activeTab: string = "account"): string {

  const navItemsHTML = settingsSections
    .map(
      (section) => `
        <button
          type="button"
          class="settings-nav__item
            ${section.id === activeTab ? "is-active" : ""}
            ${section.isDangerous ? "settings-nav__item--danger" : ""}"
          data-tab="${section.id}"
        >

          <div class="settings-nav__icon">
            <i class="${section.icon}"></i>
          </div>

          <div class="settings-nav__info">
            <span class="settings-nav__label">${section.label}</span>
            <span class="settings-nav__desc">${section.description}</span>
          </div>

          <i class="fa-solid fa-chevron-right settings-nav__arrow"></i>

        </button>
      `
    )
    .join("");

  return `
    <div class="settings-page">

      <!-- Settings Header -->
      <header class="settings-header">
        <div class="settings-header__content">
          <h1 class="settings-header__title">Settings</h1>
          <p class="settings-header__subtitle">
            Manage your account, privacy, and app experience.
          </p>
        </div>
      </header>

      <!-- Settings Layout -->
      <div class="settings-layout">

        <!-- Navigation -->
        <aside class="settings-nav">
          ${navItemsHTML}
        </aside>

        <!-- Dynamic Content -->
        <main class="settings-content">
          ${renderSettingsContent(activeTab)}
        </main>

      </div>
    </div>
  `;
}
