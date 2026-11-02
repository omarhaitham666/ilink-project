import { mockAbout } from "../profile.data";

export function aboutPage(){

return `
<section class="profile-about-page">

  <!-- Personal Information -->
  <div class="profile-card about-section">

    <div class="about-section__header">
      <h2>Personal Information</h2>
    </div>

    <div class="about-info__grid">

      <div class="about-info__item">
        <span>Full Name</span>
        <strong>${mockAbout.fullName}</strong>
      </div>

      <div class="about-info__item">
        <span>Username</span>
        <strong>${mockAbout.userName}</strong>
      </div>

      <div class="about-info__item">
        <span>Email Address</span>
        <strong>${mockAbout.emailAddress}</strong>
      </div>

      <div class="about-info__item">
        <span>Location</span>
        <strong>${mockAbout.location}</strong>
      </div>

      <div class="about-info__item">
        <span>Phone Number</span>
        <strong>${mockAbout.phone}</strong>
      </div>

      <div class="about-info__item">
        <span>Date of Birth</span>
        <strong>${mockAbout.date_of_birth}</strong>
      </div>

    </div>

  </div>

  <!-- Professional Information -->
  <div class="profile-card about-section">

    <div class="about-section__header">
      <h2>Professional Information</h2>
    </div>

    <div class="about-info__grid">

      <div class="about-info__item">
        <span>Job Title</span>
        <strong>${mockAbout.jobTitle}</strong>
      </div>

      <div class="about-info__item">
        <span>Education</span>
        <strong>${mockAbout.education}</strong>
      </div>

      <div class="about-info__item">
        <span>Experience Level</span>
        <strong>${mockAbout.experienceLevel}</strong>
      </div>

      <div class="about-info__item">
        <span>Department</span>
        <strong>${mockAbout.department}</strong>
      </div>

    </div>

  </div>

  <!-- Social Links -->
  <div class="profile-card about-section">

    <div class="about-section__header">
      <h2>Social Links</h2>
    </div>

    <div class="about-social">

      <a href="#" target="_blank">
        <span>GitHub</span>
        <span>↗</span>
      </a>

      <a href="#" target="_blank">
        <span>LinkedIn</span>
        <span>↗</span>
      </a>

      <a href="#" target="_blank">
        <span>Portfolio</span>
        <span>↗</span>
      </a>

    </div>

  </div>

</section>
`

}