
// scripts/features/settings/settings.notification.ts

export function renderNotificationSettings(): string {

  // Notification Categories
  const notificationOptions = [
    {
      id: "likes",
      icon: "fa-regular fa-heart",
      title: "Likes",
      active: true,
    },
    {
      id: "comments",
      icon: "fa-regular fa-comment",
      title: "Comments",
      active: true,
    },
    {
      id: "new-followers",
      icon: "fa-solid fa-user-plus",
      title: "New Followers",
      active: true,
    },
    {
      id: "mentions",
      icon: "fa-solid fa-at",
      title: "Mentions",
      active: true,
    },
    {
      id: "messages",
      icon: "fa-regular fa-paper-plane",
      title: "Messages",
      active: true,
    },
    {
      id: "friend-requests",
      icon: "fa-solid fa-user-group",
      title: "Friend Requests",
      active: true,
    },
  ];

  // Render Notification Options
  const notificationHTML = notificationOptions
    .map(
      (option) => `
        <div class="notification-item">

          <div class="notification-item__icon">
            <i class="${option.icon}"></i>
          </div>

          <div class="notification-item__info">
            <h3 class="notification-item__title">
              ${option.title}
            </h3>
          </div>

          <button
            type="button"
            class="notification-toggle ${option.active ? "is-active" : ""}"
            data-notification-toggle="${option.id}"
            aria-label="${option.title}"
            aria-pressed="${option.active}"
          >
            <span class="notification-toggle__circle"></span>
          </button>

        </div>
      `
    )
    .join("");

  return `
    <div class="settings-card notification-card">

      <!-- Notification Header -->
      <div class="notification-header">

        <button
          type="button"
          class="notification-header__back"
          data-notification-back
          aria-label="Go back"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>

        <h2 class="notification-header__title">
          Notifications
        </h2>

      </div>

      <!-- Notification Cover -->
      <div class="notification-cover">
        <img
          src="/assets/settings/notifications-cover.png"
          alt="Notifications Cover"
          class="notification-cover__image"
        />
      </div>

      <!-- Push Notifications -->
      <div class="notification-push">

        <div class="notification-push__icon">
          <i class="fa-regular fa-bell"></i>
        </div>

        <div class="notification-push__info">
          <h3 class="notification-push__title">
            Push Notifications
          </h3>

          <p class="notification-push__description">
            Receive notifications on your device.
          </p>
        </div>

        <button
          type="button"
          class="notification-toggle is-active"
          data-notification-toggle="push"
          aria-label="Push Notifications"
          aria-pressed="true"
        >
          <span class="notification-toggle__circle"></span>
        </button>

      </div>

      <!-- Notification Categories -->
      <section class="notification-section">

        <h3 class="notification-section__title">
          Notify Me About
        </h3>

        <div class="notification-list">
          ${notificationHTML}
        </div>

      </section>

    </div>
  `;
}
