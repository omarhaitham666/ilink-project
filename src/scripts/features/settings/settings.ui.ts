// scripts/features/settings/settings.ui.ts

import { settingsSections, settingsUser } from "./settings.data";

export function renderSettings(): string {
  const { account, avatar, cover } = settingsUser;

  // 1. القائمة الوسطى (قائمة إعدادات الفرعية)
  const navItemsHTML = settingsSections
    .map(
      (section) => `
    <button type="button" 
            class="settings-nav__item ${section.id === "account" ? "is-active" : ""} ${section.isDangerous ? "settings-nav__item--danger" : ""}" 
            data-tab="${section.id}">
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
      
      <!-- الهيدر العلوي الكبير بصورة المدينة الليلية والهلال -->
      <header class="settings-header" style="background-image: url('${cover}'); background-size: cover; background-position: center;">
        <div class="settings-header__content">
          <h1 class="settings-header__title">Settings</h1>
          <p class="settings-header__subtitle">Manage your account, privacy, and app experience.</p>
        </div>
      </header>

      <!-- التخطيط الرئيسي (3 أعمدة مطابقة للصورة تماماً) -->
      <div class="settings-layout">
        
        <!-- العمود الأول: قائمة الإعدادات الفرعية في المنتصف -->
        <aside class="settings-nav">
          ${navItemsHTML}
        </aside>

        <!-- العمود الثاني/الثالث: المحتوى الرئيسي (الكارت اليمين) -->
        <main class="settings-content">
          <div class="settings-card">
            
            <div class="settings-card__header">
              <h2>Account Settings</h2>
              <p>Update your personal information and how others see you on iLink.</p>
            </div>

            <!-- كارت غلاف البروفايل (الـ Cover الصغير) -->
            <div class="settings-profile-banner">
              <div class="settings-profile-banner__cover" style="background-image: url('${cover}')">
                <button type="button" class="settings-profile-banner__edit-cover">
                  <i class="fa-regular fa-image"></i> Edit Cover
                </button>
              </div>
              
              <div class="settings-profile-banner__user">
                <div class="settings-profile-banner__avatar-wrapper">
                  <img src="${avatar}" alt="${account.fullName}" class="settings-profile-banner__avatar" />
                  <button type="button" class="settings-profile-banner__avatar-edit">
                    <i class="fa-solid fa-camera"></i>
                  </button>
                </div>
                <div class="settings-profile-banner__info">
                  <h3 class="settings-profile-banner__name">
                    ${account.fullName} 
                    ${account.isVerified ? '<i class="fa-solid fa-circle-check settings-profile-banner__verified"></i>' : ""}
                  </h3>
                  <span class="settings-profile-banner__handle">${account.username}</span>
                </div>
              </div>
            </div>

            <!-- الفورم وحقول الإدخال الخاصة بـ AccountSettings -->
            <form class="settings-form" onsubmit="event.preventDefault();">
              <div class="settings-form__grid">
                
                <!-- Full Name -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-regular fa-user"></i> Full Name</label>
                  <div class="settings-field__input-wrapper">
                    <input type="text" class="settings-field__input" value="${account.fullName}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Phone -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-solid fa-phone"></i> Phone</label>
                  <div class="settings-field__input-wrapper">
                    <input type="text" class="settings-field__input" value="${account.phone}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Username -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-solid fa-at"></i> Username</label>
                  <div class="settings-field__input-wrapper">
                    <input type="text" class="settings-field__input" value="${account.username}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Location -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-solid fa-location-dot"></i> Location</label>
                  <div class="settings-field__input-wrapper">
                    <input type="text" class="settings-field__input" value="${account.location}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Email -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-regular fa-envelope"></i> Email</label>
                  <div class="settings-field__input-wrapper">
                    <input type="email" class="settings-field__input" value="${account.email}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Website -->
                <div class="settings-field">
                  <label class="settings-field__label"><i class="fa-solid fa-globe"></i> Website</label>
                  <div class="settings-field__input-wrapper">
                    <input type="url" class="settings-field__input" value="${account.website}" />
                    <button type="button" class="settings-field__edit-btn"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>

                <!-- Bio (Full Width - بياخد العمودين مع بعض) -->
                <div class="settings-field settings-field--full">
                  <label class="settings-field__label"><i class="fa-regular fa-note-sticky"></i> Bio</label>
                  <div class="settings-field__textarea-wrapper" style="position: relative;">
                    <textarea class="settings-field__textarea" rows="3">${account.bio}</textarea>
                    <span class="settings-field__counter">${account.bio.length} / 160</span>
                  </div>
                </div>

              </div>

              <!-- أزرار الحفظ والإلغاء في الأسفل -->
              <div class="settings-form__actions">
                <button type="button" class="btn-discard" style="background: transparent; border: none; color: #94a3b8; cursor: pointer; font-weight: 600;">Discard Changes</button>
                <button type="submit" class="btn-save" style="background: linear-gradient(135deg, #9333ea, #4f46e5); border: none; color: white; padding: 10px 24px; border-radius: 10px; cursor: pointer; font-weight: 600;">Save Changes</button>
              </div>
            </form>

          </div>
        </main>

      </div>
    </div>
  `;
}