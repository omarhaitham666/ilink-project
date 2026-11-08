export function editProfile():string{

return `
    <div class="edit-profile-modal" id="editProfileModal">

      <div class="edit-profile-modal__overlay"></div>

      <div class="edit-profile-modal__container">

        <div class="edit-profile-modal__header">
          <div>
            <h2>Edit Profile</h2>
            <p>Update your personal information and profile details</p>
          </div>

          <button class="edit-profile-modal__close" data-close-modal>
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <form class="edit-profile-form">

          <!-- Profile Images -->
          <div class="edit-profile-form__images">

            <div class="edit-profile-form__cover">
              <div class="edit-profile-form__image-label">
                <i class="bi bi-image"></i>
                <span>Cover Image</span>
              </div>

              <button type="button" class="edit-profile-form__upload">
                <i class="bi bi-camera"></i>
                Change Cover
              </button>
            </div>

            <div class="edit-profile-form__avatar">
              <div class="edit-profile-form__avatar-preview">
                <i class="bi bi-person"></i>
              </div>

              <button type="button" class="edit-profile-form__avatar-upload">
                <i class="bi bi-camera"></i>
              </button>
            </div>

          </div>

          <!-- Basic Information -->
          <div class="edit-profile-form__section">
            <h3>Basic Information</h3>

            <div class="edit-profile-form__grid">

              <div class="edit-profile-form__field">
                <label for="editFullName">Full Name</label>
                <input
                  type="text"
                  id="editFullName"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div class="edit-profile-form__field">
                <label for="editUsername">Username</label>
                <input
                  type="text"
                  id="editUsername"
                  name="userName"
                  placeholder="Enter your username"
                />
              </div>

              <div class="edit-profile-form__field edit-profile-form__field--full">
                <label for="editJobTitle">Job Title</label>
                <input
                  type="text"
                  id="editJobTitle"
                  name="jobTitle"
                  placeholder="e.g. Front-end Developer"
                />
              </div>

              <div class="edit-profile-form__field edit-profile-form__field--full">
                <label for="editBio">Bio</label>
                <textarea
                  id="editBio"
                  name="bio"
                  rows="4"
                  placeholder="Tell people about yourself..."
                ></textarea>
              </div>

            </div>
          </div>

          <!-- Actions -->
          <div class="edit-profile-form__actions">
            <button type="button" class="edit-profile-form__cancel" data-close-modal id="cancelButton">
              Cancel
            </button>

            <button type="submit" class="edit-profile-form__save">
              <i class="bi bi-check2"></i>
              Save Changes
            </button>
          </div>

        </form>

      </div>
    </div>
`


}