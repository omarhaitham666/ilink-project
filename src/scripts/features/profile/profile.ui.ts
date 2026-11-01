import { mockProfileData } from "./profile.data";

export function ProfilePage(): string {
  return `
    <section class="profile">

      <!-- Profile Header -->
      <div class="profile-header">

        <div class="profile-header__cover">
          <img
            src="${mockProfileData.coverImage}"
            alt="Profile Cover"
          />
        </div>

        <div class="profile-header__content">

          <div class="profile-header__avatar">
            <img
              src="${mockProfileData.avatar}"
              alt="${mockProfileData.name}"
            />
          </div>

          <div class="profile-header__info">

            <div class="profile-header__identity">
              <h1>${mockProfileData.name}</h1>
              <span class="profile-header__username">
                @${mockProfileData.userName}
              </span>
            </div>

            <p class="profile-header__job">
              ${mockProfileData.jobTitle}
            </p>

            <p class="profile-header__bio">
              ${mockProfileData.bio}
            </p>

          </div>

          <div class="profile-header__actions">
            <button class="profile-header__edit">
              Edit Profile
            </button>

            <button class="profile-header__share">
              Share Profile
            </button>
          </div>

        </div>
      </div>

      <!-- Profile Tabs -->
      <nav class="profile-tabs">

        <button class="profile-tabs__item is-active">
          Overview
        </button>

        <button class="profile-tabs__item">
          About
        </button>

        <button class="profile-tabs__item">
          Posts
        </button>

        <button class="profile-tabs__item">
          Projects
        </button>

        <button class="profile-tabs__item">
          Activity
        </button>

      </nav>

    </section>
  `
}