import { mockProfileData } from "./profile.data";
import { overviewPage } from "./profile.content/profile.overview";
import { aboutPage } from "./profile.content/profile.about";
import { postsPage } from "./profile.content/profile.posts";
import portfolioPage from "./profile.content/profile.portfolio";
import activityPage from "./profile.content/profile.activity";


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
            <button class="profile-header__edit" id="editProfileButton">
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

        <button class="profile-tabs__item is-active" data-tab="overview">
          Overview
        </button>

        <button class="profile-tabs__item" data-tab="about">
          About
        </button>

        <button class="profile-tabs__item" data-tab="posts">
          Posts
        </button>

        <button class="profile-tabs__item" data-tab="portfolio">
          Portfolio
        </button>

        <button class="profile-tabs__item" data-tab="activity">
          Activity
        </button>

      </nav>

      <div class="profile-tab-content">
 <div data-page="overview" class="is-active">
    ${overviewPage()}
  </div>

 <div data-page="about">
   ${aboutPage()}
  </div>

 <div data-page="posts">
  ${postsPage()}
  </div>

 <div data-page="portfolio">
${portfolioPage()}
  </div>

 <div data-page="activity">
    ${activityPage()}
  </div>

</div>

<div id="modalContainer"></div>
    </section>
  `

}


