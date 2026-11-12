import { SettingsPage } from "../pages/settings";
import { Sidebar } from "../layouts/sidebar";
import { PlaceholderPage } from "../pages/placeholder";

import { ProfilePage } from "../features/profile/profile.ui";
import { initProfileEvents } from "../features/profile/profile.events";

type Route = {
  title: string;
  render: () => string;
  mount?: () => void | (() => void);
};

const routes: Record<string, Route> = {
  "/feed": {
    title: "Home",
    render: () => PlaceholderPage("Home"),
  },

  "/connections": {
    title: "Connections",
    render: () => PlaceholderPage("Connections"),
  },

  "/messages": {
    title: "Messages",
    render: () => PlaceholderPage("Messages"),
  },

"/profile": {
  title: "Profile",
  render: ProfilePage,
  mount:initProfileEvents
},

"/settings": {
  title: "Settings",
  render: SettingsPage,
},
};

let cleanupCurrentPage: (() => void) | undefined;

function normalizePath(path: string): string {
  if (path === "/") return "/feed";

  return path.replace(/\/+$/, "");
}

function renderRoute(): void {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) return;

  // Remove listeners from the previous page
  cleanupCurrentPage?.();
  cleanupCurrentPage = undefined;

  const path = normalizePath(window.location.pathname);
  const route = routes[path];

  const pageContent = route
    ? route.render()
    : PlaceholderPage("404 — Page Not Found");

  app.innerHTML = `
    <div class="app-layout">
      ${Sidebar(path)}

      <main class="app-layout__content">
        ${pageContent}
      </main>
    </div>
  `;

  // Initialize interactions after rendering HTML
  if (route?.mount) {
    const cleanup = route.mount();

    if (typeof cleanup === "function") {
      cleanupCurrentPage = cleanup;
    }
  }

  document.title = route
    ? `${route.title} | iLink`
    : "404 | iLink";
}

export function navigate(path: string): void {
  const normalizedPath = normalizePath(path);

  if (window.location.pathname !== normalizedPath) {
    window.history.pushState({}, "", normalizedPath);
  }

  renderRoute();
}

export function initRouter(): void {
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>("a[data-link]");

    if (!link) return;

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self") ||
      link.origin !== window.location.origin
    ) {
      return;
    }

    event.preventDefault();

    navigate(link.pathname + link.search + link.hash);
  });

  window.addEventListener("popstate", renderRoute);

  if (window.location.pathname === "/") {
    window.history.replaceState({}, "", "/feed");
  }

  renderRoute();
}
