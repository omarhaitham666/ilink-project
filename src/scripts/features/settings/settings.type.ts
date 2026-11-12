// scripts/features/settings/settings.type.ts

export type SettingsTab =
  | "account"
  | "privacy"
  | "notifications"
  | "appearance"
  | "blocked"
  | "help"
  | "delete";

export type SettingsSection = {
  id: SettingsTab;
  label: string;
  description: string;
  icon: string;
  isDangerous?: boolean;
};

export type AccountSettings = {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  bio: string;
  isVerified?: boolean;
};

export type SettingsUser = {
  avatar: string;
  cover: string;
  account: AccountSettings;
};