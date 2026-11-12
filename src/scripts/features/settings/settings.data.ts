// scripts/features/settings/settings.data.ts

import type { SettingsSection, SettingsUser } from "./settings.type";

export const settingsSections: SettingsSection[] = [
  {
    id: "account",
    label: "Account",
    description: "Update your profile information",
    icon: "fa-regular fa-user",
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    description: "Control your privacy and keep your account safe",
    icon: "fa-solid fa-shield-halved",
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Manage your notifications",
    icon: "fa-regular fa-bell",
  },
  {
    id: "appearance",
    label: "Appearance",
    description: "Theme, colors, and display",
    icon: "fa-regular fa-moon",
  },
  {
    id: "blocked",
    label: "Blocked Accounts",
    description: "Manage blocked users",
    icon: "fa-solid fa-ban",
  },
  {
    id: "help",
    label: "Help & Support",
    description: "Get help or report a problem",
    icon: "fa-regular fa-circle-question",
  },
  {
    id: "delete",
    label: "Delete Account",
    description: "Permanently delete your account",
    icon: "fa-regular fa-trash-can",
    isDangerous: true,
  },
];

export const settingsUser: SettingsUser = {
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  cover: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&auto=format&fit=crop&q=80",
  account: {
    fullName: "Moamen Hany",
    username: "@Moamen.dev",
    email: "moamen.dev@gmail.com",
    phone: "+20 1287470501",
    location: "alex, Egypt",
    website: "https://omar.dev",
    bio: "Developer · Turning ideas into real connections. ✨",
    isVerified: true,
  },
};
