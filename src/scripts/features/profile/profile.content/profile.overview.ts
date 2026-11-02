import { mockOverview } from "../profile.data";

export function overviewPage(){

return `<!-- Profile Content -->
<section class="profile-content">

  <!-- About Me -->
  <div class="profile-card profile-about">

    <div class="profile-card__header">
      <h2>About Me</h2>
      <button class="profile-card__more">•••</button>
    </div>

    <p class="profile-about__description">
     ${mockOverview.description}
    </p>

    <div class="profile-about__details">

      <div class="profile-about__item">
        <span class="profile-about__label">Location</span>
        <span class="profile-about__value">${mockOverview.location}</span>
      </div>

      <div class="profile-about__item">
        <span class="profile-about__label">Education</span>
        <span class="profile-about__value">${mockOverview.education}</span>
      </div>

      <div class="profile-about__item">
        <span class="profile-about__label">Job Title</span>
        <span class="profile-about__value">${mockOverview.jobTitle}</span>
      </div>

    </div>

  </div>

  <!-- Skills -->
  <div class="profile-card profile-skills">

    <div class="profile-card__header">
      <h2>Skills</h2>
      <button class="profile-card__more">•••</button>
    </div>

    <div class="profile-skills__list">
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
      <span class="profile-skills__tag">${mockOverview.skill}</span>
    </div>

  </div>

  <!-- Recent Activity -->
  <div class="profile-card profile-activity">

    <div class="profile-card__header">
      <h2>Recent Activity</h2>
      <button class="profile-card__more">•••</button>
    </div>

    <div class="profile-activity__list">

      <div class="profile-activity__item">
        <div class="profile-activity__icon">🚀</div>
        <div class="profile-activity__info">
          <h3>Started a new project</h3>
          <p>${mockOverview.activity}</p>
          <span>2 hours ago</span>
        </div>
      </div>

      <div class="profile-activity__item">
        <div class="profile-activity__icon">💻</div>
        <div class="profile-activity__info">
          <h3>Updated portfolio</h3>
          <p>Added new projects to my portfolio.</p>
          <span>Yesterday</span>
        </div>
      </div>

      <div class="profile-activity__item">
        <div class="profile-activity__icon">🎯</div>
        <div class="profile-activity__info">
          <h3>Learning TypeScript</h3>
          <p>Practicing TypeScript concepts.</p>
          <span>3 days ago</span>
        </div>
      </div>

    </div>

  </div>

</section>`




}