
import { Sidebar } from "../layouts/sidebar";
import { PlaceholderPage } from "../pages/placeholder";

const routes: Record<string, string> = {
  "/feed": "Home",
  "/connections": "Connections",
  "/messages": "Messages",
  "/profile": "Profile",
  "/settings": "Settings",
};

function normalizePath(path: string): string {
  if (path === "/") return "/feed";

  return path.replace(/\/+$/, "");
}

function renderRoute(): void {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) return;

  const path = normalizePath(window.location.pathname);
  const title = routes[path];

  app.innerHTML = `
    <div class="app-layout">
      ${Sidebar(path)}

      <main class="app-layout__content">
        ${
          title
            ? PlaceholderPage(title)
            : PlaceholderPage("404 — Page Not Found")
        }
      </main>
    </div>
  `;
}

export function navigate(path: string): void {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
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

    navigate(link.pathname);
  });

  window.addEventListener("popstate", renderRoute);

  if (window.location.pathname === "/") {
    window.history.replaceState({}, "", "/feed");
  }

  renderRoute();
}
