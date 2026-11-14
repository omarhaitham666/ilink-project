
 // scripts/features/settings/settings.account.ts

import { settingsUser } from "./settings.data";

export function renderAccountSettings(): string {

  const { account, avatar } = settingsUser;

  return `
    <div class="settings-card">

      <div class="settings-card__header">
        <h2>Account Settings</h2>
        <p>Update your personal information and how others see you on iLink.</p>
      </div>

      <!-- Profile Banner -->
      <div class="settings-profile-banner">

        <div class="settings-profile-banner__cover">
          <button type="button" class="settings-profile-banner__edit-cover">
            <i class="fa-regular fa-image"></i> Edit Cover
          </button>
        </div>

        <div class="settings-profile-banner__user">

          <div class="settings-profile-banner__avatar-wrapper">
            <img
              src="${avatar}"
              alt="${account.fullName}"
              class="settings-profile-banner__avatar"
            />

            <button type="button" class="settings-profile-banner__avatar-edit">
              <i class="fa-solid fa-camera"></i>
            </button>
          </div>

          <div class="settings-profile-banner__info">

            <h3 class="settings-profile-banner__name">
              ${account.fullName}
              ${
                account.isVerified
                  ? '<i class="fa-solid fa-circle-check settings-profile-banner__verified"></i>'
                  : ""
              }
            </h3>

            <span class="settings-profile-banner__handle">
              ${account.username}
            </span>

          </div>
        </div>
      </div>

      <!-- Account Form -->
      <form class="settings-form settings-form--reference"
            onsubmit="event.preventDefault();">

        <div class="settings-form__grid">

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-regular fa-user"></i> Full Name
            </label>

            <div class="settings-field__input-wrapper">
              <input type="text" class="settings-field__input"
                     value="${account.fullName}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-solid fa-phone"></i> Phone
            </label>

            <div class="settings-field__input-wrapper">
              <input type="text" class="settings-field__input"
                     value="${account.phone}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-solid fa-at"></i> Username
            </label>

            <div class="settings-field__input-wrapper">
              <input type="text" class="settings-field__input"
                     value="${account.username}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-solid fa-location-dot"></i> Location
            </label>

            <div class="settings-field__input-wrapper">
              <input type="text" class="settings-field__input"
                     value="${account.location}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-regular fa-envelope"></i> Email
            </label>

            <div class="settings-field__input-wrapper">
              <input type="email" class="settings-field__input"
                     value="${account.email}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field">
            <label class="settings-field__label">
              <i class="fa-solid fa-globe"></i> Website
            </label>

            <div class="settings-field__input-wrapper">
              <input type="url" class="settings-field__input"
                     value="${account.website}" />

              <button type="button" class="settings-field__edit-btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

          <div class="settings-field settings-field--full">
            <label class="settings-field__label">
              <i class="fa-regular fa-note-sticky"></i> Bio
            </label>

            <div class="settings-field__textarea-wrapper">
              <textarea class="settings-field__textarea" rows="3">${account.bio}</textarea>

              <span class="settings-field__counter">
                ${account.bio.length} / 160
              </span>
            </div>
          </div>

        </div>

        <div class="settings-form__actions">
          <button type="button" class="btn-discard">
            Discard Changes
          </button>

          <button type="submit" class="btn-save">
            Save Changes
          </button>
        </div>

      </form>
    </div>
  `;
}
