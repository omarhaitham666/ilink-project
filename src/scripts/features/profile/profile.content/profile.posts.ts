import { mockAbout, mockPosts, mockProfileData } from "../profile.data";
import { postsData } from "../profile.type";

export function postsPage(){

const posts:postsData[] = mockPosts
  
return `<section class="profile-posts">

  <!-- Create Post -->
  <div class="profile-card create-post">
    <div class="create-post__header">
      <h2>Create a Post</h2>
    </div>

    <div class="create-post__body">
      <img src=${mockProfileData.avatar} alt="User Avatar">

      <textarea placeholder="What's on your mind?"></textarea>
    </div>

    <div class="create-post__footer">
      <button class="post-btn">
        <i class="fa-solid fa-image"></i>
        Photo
      </button>

      <button class="publish-btn">
        Post
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  </div>

  <!-- Post Card -->

  ${posts.map((post)=>`<article class="profile-card post-card">

    <div class="post-card__header">
      <div class="post-card__user">
        <img src=${mockProfileData.avatar} alt="User Avatar">

        <div>
          <h3>${mockProfileData.name}</h3>
          <span>${mockAbout.jobTitle}</span>
          <small>2 hours ago · <i class="fa-solid fa-earth-americas"></i></small>
        </div>
      </div>

      <button class="post-menu">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </div>

    <div class="post-card__content">
      <p>
      ${post.content}
     </p>

     ${post.img ? `<img src="${post.img}" alt="Post image">` : ""}
    </div>

    <div class="post-card__stats">
      <span><i class="fa-solid fa-heart"></i> 24 Likes</span>
      <span>8 Comments</span>
    </div>

    <div class="post-card__actions">
      <button><i class="fa-regular fa-heart"></i> Like</button>
      <button><i class="fa-regular fa-comment"></i> Comment</button>
      <button><i class="fa-solid fa-share"></i> Share</button>
    </div>

  </article>`).join("")}

</section>`


}