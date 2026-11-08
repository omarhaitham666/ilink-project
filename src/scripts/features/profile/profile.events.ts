import { editProfile } from "./profile.content/profile.model-edit";

export function initProfileEvents() {
  const pages = document.querySelectorAll<HTMLButtonElement>('.profile-tabs__item');

  pages.forEach(function (page) {
    page.addEventListener('click', function () {

      pages.forEach(function (item) {
        item.classList.remove('is-active');
      });

      page.classList.add('is-active');

const data = document.querySelectorAll<HTMLElement>('[data-page]')

data.forEach(function dataName(data){

  data.classList.remove('is-active')

if (data.dataset.page === page.dataset.tab) {
    data.classList.add('is-active')
}

})
    });
  });


 const editProfileButton = document.getElementById('editProfileButton');
const modalContainer = document.getElementById('modalContainer');


editProfileButton?.addEventListener('click', function () {

  if (!modalContainer) return;

  modalContainer.innerHTML = editProfile();

  const modal = document.getElementById('editProfileModal');
  modal?.classList.add('is-active');

  const cancelButton = document.getElementById('cancelButton');

  cancelButton?.addEventListener('click', function () {
    modal?.classList.remove('is-active');
  });

});}


