
// scripts/features/settings/settings.events.ts

import { settingsSections } from "./settings.data";
import { renderSettingsContent } from "./settings.ui";
import { initBlockedEvents } from "./settings.blocked";

export function initSettingsEvents(root: HTMLElement): void {

  // منع تكرار إضافة نفس الـ Event
  if (root.dataset.settingsEvents === "initialized") {
    return;
  }

  root.dataset.settingsEvents = "initialized";

  // -----------------------------------
  // تشغيل أحداث الصفحة الحالية
  // -----------------------------------

  const initializeCurrentPage = (activeTab: string): void => {
    if (activeTab === "blocked") {
      initBlockedEvents();
    }
  };

  // تشغيل أحداث الصفحة عند التحميل الأول
  const initialActiveTab =
    root.querySelector<HTMLElement>(".settings-nav__item.is-active")
      ?.dataset.tab ?? "account";

  initializeCurrentPage(initialActiveTab);

  // الاستماع للضغط
  root.addEventListener("click", (event: MouseEvent) => {

    const target = event.target;

    if (!(target instanceof Element)) return;

    // -----------------------------------
    // Appearance Theme Selection
    // -----------------------------------

    const themeButton = target.closest<HTMLButtonElement>(
      "[data-theme-option]"
    );

    if (themeButton && root.contains(themeButton)) {

      const themeButtons = root.querySelectorAll<HTMLButtonElement>(
        "[data-theme-option]"
      );

      themeButtons.forEach((button) => {

        const isActive = button === themeButton;

        button.classList.toggle("is-active", isActive);

        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );

      });

      return;
    }

    // -----------------------------------
    // Settings Navigation
    // -----------------------------------

    const navButton = target.closest<HTMLButtonElement>(
      ".settings-nav__item"
    );

    if (!navButton || !root.contains(navButton)) return;

    // معرفة الصفحة المختارة
    const activeTab = navButton.dataset.tab;

    if (!activeTab) return;

    // التأكد إن الصفحة موجودة في البيانات
    const sectionExists = settingsSections.some(
      (section) => section.id === activeTab
    );

    if (!sectionExists) return;

    // تغيير Active في Navigation
    root.querySelectorAll(".settings-nav__item").forEach((item) => {
      item.classList.remove("is-active");
    });

    navButton.classList.add("is-active");

    // تغيير محتوى الجزء اليمين فقط
    const content = root.querySelector<HTMLElement>(
      ".settings-content"
    );

    if (!content) return;

    content.innerHTML = renderSettingsContent(activeTab);

    // تشغيل أحداث الصفحة المختارة
    initializeCurrentPage(activeTab);

  });

}
