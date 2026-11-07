import { mockPortfolio } from "../profile.data"
import { portfolioData } from "../profile.type"

function portfolioPage(){

const projects:portfolioData[] = mockPortfolio

return `

<!-- Projects & Portfolio -->
<section class="profile-projects">

  <div class="profile-card">

    <!-- Header -->
    <div class="profile-card__header">
      <div>
        <h2>Projects & Portfolio</h2>
        <p class="profile-projects__subtitle">
          Explore my work and creative projects
        </p>
      </div>

      <div class="profile-projects__actions">
        <span class="profile-projects__count">
          ${projects.length} Works
        </span>

        <button class="profile-projects__add">
          <i class="bi bi-plus-lg"></i>
          Add Work
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="profile-projects__grid">

      <!-- Work Card -->
    
${projects.map((project)=>`<article class="project-card">

        <div class="project-card__image">
          <img src='${project.img}'>

          <span class="project-card__category">
            ${project.category}
          </span>
        </div>

        <div class="project-card__body">

          <div class="project-card__top">
            <span class="project-card__date">
              <i class="bi bi-calendar3"></i>
              ${project.calendar}
            </span>
          </div>

          <h3 class="project-card__title">
            ${project.title}
          </h3>

          <p class="project-card__description">
          ${project.description}
          </p>

          <div class="project-card__tools">
          ${project.tools?.map((tool) => `
    <span>${tool}</span>
  `).join("")}
          </div>

          <div class="project-card__footer">

            <a href='${project.link}' class="project-card__link">
              <i class="bi bi-eye"></i>
              View Work
            </a>

          </div>

        </div>

      </article>`).join("")}


    </div>

  </div>

</section>
`

}

export default portfolioPage