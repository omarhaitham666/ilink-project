
 // scripts/features/settings/settings.events.ts

import { settingsSections } from "./settings.data";
import { renderSettingsContent } from "./settings.ui";

export function initSettingsEvents(root: HTMLElement): void {

  // منع تكرار إضافة نفس الـ Event
  if (root.dataset.settingsEvents === "initialized") {
    return;
  }

  root.dataset.settingsEvents = "initialized";

  // الاستماع للضغط على Navigation
  root.addEventListener("click", (event: MouseEvent) => {

    const target = event.target;

    if (!(target instanceof Element)) return;

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

  });

}
