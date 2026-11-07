function activityPage(){

return `
<section class="profile-activity">

  <div class="profile-card">

    <!-- Header -->
    <div class="profile-card__header">
      <div>
        <h2>Activity</h2>
        <p class="profile-activity__subtitle">
          Your recent activity and updates
        </p>
      </div>
    </div>

   

    <!-- Activity Timeline -->
    <div class="profile-activity__timeline">

      <!-- Activity Item -->
      <article class="activity-item">

        <div class="activity-item__icon">
          <i class="bi bi-briefcase"></i>
        </div>

        <div class="activity-item__content">

          <div class="activity-item__header">
            <h3>Added a new project</h3>
            <span>2 hours ago</span>
          </div>

          <p>
            Added Modern E-Commerce Website to the portfolio.
          </p>

          <a href="#" class="activity-item__link">
            View Project
            <i class="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </article>

      <!-- Activity Item -->
      <article class="activity-item">

        <div class="activity-item__icon">
          <i class="bi bi-file-text"></i>
        </div>

        <div class="activity-item__content">

          <div class="activity-item__header">
            <h3>Published a new post</h3>
            <span>Yesterday</span>
          </div>

          <p>
            Sharing my latest frontend development work.
          </p>

          <a href="#" class="activity-item__link">
            View Post
            <i class="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </article>

      <!-- Activity Item -->
      <article class="activity-item">

        <div class="activity-item__icon">
          <i class="bi bi-person"></i>
        </div>

        <div class="activity-item__content">

          <div class="activity-item__header">
            <h3>Updated profile information</h3>
            <span>3 days ago</span>
          </div>

          <p>
            Updated profile bio and personal information.
          </p>

        </div>

      </article>

    </div>

  </div>

</section>
`



}

export default activityPage