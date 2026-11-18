
// scripts/features/settings/settings.blocked.ts

interface BlockedUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

// Blocked Users Data
const blockedUsers: BlockedUser[] = [
  {
    id: 1,
    name: "Alex Morgan",
    username: "@alexmorgan",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Sophia Williams",
    username: "@sophiaw",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Daniel Carter",
    username: "@danielcarter",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    name: "Olivia Brown",
    username: "@oliviabrown",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

// Render Blocked User
function renderBlockedUser(user: BlockedUser): string {
  return `
    <div class="blocked-user" data-user-id="${user.id}">

      <div class="blocked-user__profile">

        <img
          class="blocked-user__avatar"
          src="${user.avatar}"
          alt="${user.name}"
        />

        <div class="blocked-user__info">
          <h3 class="blocked-user__name">${user.name}</h3>
          <span class="blocked-user__username">
            ${user.username}
          </span>
        </div>

      </div>

      <button
        type="button"
        class="blocked-user__button"
        data-unblock="${user.id}"
      >
        <i class="fa-solid fa-unlock"></i>
        <span>Unblock</span>
      </button>

    </div>
  `;
}

// Render Blocked Accounts Page
export function renderBlockedSettings(): string {

  return `
    <section class="blocked-settings">

      <div class="blocked-settings__header">
        <div>
          <h2 class="blocked-settings__title">
            Blocked Accounts
          </h2>

          <p class="blocked-settings__description">
            Manage the accounts you've blocked.
            They won't be able to follow you or interact with your content.
          </p>
        </div>

        <div class="blocked-settings__count">
          <i class="fa-solid fa-ban"></i>
          <span>${blockedUsers.length} Blocked</span>
        </div>
      </div>

      <div class="blocked-card">

        <div class="blocked-card__header">
          <div>
            <h3>Blocked Users</h3>
            <p>Accounts you've restricted from interacting with you.</p>
          </div>

          <i class="fa-solid fa-user-lock"></i>
        </div>

        <div class="blocked-users-list">
          ${
            blockedUsers.length
              ? blockedUsers.map(renderBlockedUser).join("")
              : `
                <div class="blocked-empty">
                  <i class="fa-solid fa-shield-heart"></i>
                  <h3>No Blocked Accounts</h3>
                  <p>You haven't blocked anyone yet.</p>
                </div>
              `
          }
        </div>

      </div>

    </section>
  `;
}

// Unblock User Event
export function initBlockedEvents(): void {

  const root = document.querySelector(".blocked-settings");

  if (!root) return;

  if (root.getAttribute("data-blocked-events") === "initialized") {
    return;
  }

  root.setAttribute("data-blocked-events", "initialized");

  root.addEventListener("click", (event) => {

    const target = event.target as HTMLElement;

    const button = target.closest<HTMLButtonElement>(
      "[data-unblock]"
    );

    if (!button) return;

    const userId = Number(button.dataset.unblock);

    const userIndex = blockedUsers.findIndex(
      (user) => user.id === userId
    );

    if (userIndex === -1) return;

    blockedUsers.splice(userIndex, 1);

    const userElement = button.closest(".blocked-user");

    userElement?.remove();

    const count = root.querySelector(
      ".blocked-settings__count span"
    );

    if (count) {
      count.textContent = `${blockedUsers.length} Blocked`;
    }

    if (blockedUsers.length === 0) {
      const list = root.querySelector(".blocked-users-list");

      if (list) {
        list.innerHTML = `
          <div class="blocked-empty">
            <i class="fa-solid fa-shield-heart"></i>
            <h3>No Blocked Accounts</h3>
            <p>You haven't blocked anyone yet.</p>
          </div>
        `;
      }
    }

  });
}
