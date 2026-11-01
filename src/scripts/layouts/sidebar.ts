
type IconName =
  | "home"
  | "connections"
  | "messages"
  | "profile"
  | "settings"
  | "moon";

type NavItem = {
  label: string;
  href: string;
  icon: IconName;
  badge?: number;
};

const icons: Record<IconName, string> = {
  home: `<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>`,
  connections: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
  messages: `<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z"/><path d="m9 12 2 2 4-4"/>`,
  profile: `<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l-2.83 2.83A1.7 1.7 0 0 0 15 19.4 1.7 1.7 0 0 0 13.6 21h-3.2A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.91.31l-2.83-2.83A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 13.6v-3.2A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l2.83-2.83A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10.4 3h3.2A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.91-.31l2.83 2.83A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.6 1.4v3.2a1.7 1.7 0 0 0-1.6 1.4z"/>`,
  moon: `<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z"/>`,
};

function renderIcon(name: IconName): string {
  return `
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${icons[name]}
    </svg>
  `;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/feed", icon: "home" },
  { label: "Connections", href: "/connections", icon: "connections" },
  { label: "Messages", href: "/messages", icon: "messages", badge: 3 },
  { label: "Profile", href: "/profile", icon: "profile" },
  { label: "Settings", href: "/settings", icon: "settings" },
];

export function Sidebar(
  currentPath: string = window.location.pathname
): string {
  const links = navItems.map((item) => {
    const active = currentPath === item.href;

    return `
      <a
        href="${item.href}"
        data-link
        class="sidebar__link${active ? " is-active" : ""}"
        ${active ? 'aria-current="page"' : ""}
      >
        ${renderIcon(item.icon)}
        <span class="sidebar__label">${item.label}</span>
        ${item.badge
          ? `<span class="sidebar__badge">${item.badge}</span>`
          : ""}
      </a>
    `;
  }).join("");

  return `
    <aside class="sidebar">
      <div class="sidebar__header">
        <a href="/feed" data-link class="sidebar__logo">
          i<span>Link</span>
        </a>
      </div>

      <nav class="sidebar__navigation" aria-label="Main navigation">
        ${links}
      </nav>

      <div class="sidebar__bottom">
        <div class="sidebar__art" aria-hidden="true">
          <span class="sidebar__art-ring sidebar__art-ring--one"></span>
          <span class="sidebar__art-ring sidebar__art-ring--two"></span>
        </div>

        <div class="sidebar__tagline">
          <p>Better<br />connections.<br />Bigger<br />opportunities.</p>
          <span class="sidebar__tagline-line"></span>
        </div>

        <div class="sidebar__theme">
          ${renderIcon("moon")}
          <span>Dark mode</span>
          <span class="sidebar__switch" aria-label="Dark mode enabled">
            <span></span>
          </span>
        </div>

        <div class="sidebar__copyright">
          © 2026 iLink. All rights reserved.
        </div>
      </div>
    </aside>
  `;
}
