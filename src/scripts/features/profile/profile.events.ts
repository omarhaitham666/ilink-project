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
}