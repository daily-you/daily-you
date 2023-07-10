import { Language } from "..";

/**
 * @description
 * This is the user interface.
 */
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  identity: UserIdentity;
  preferences: UserPreferences;
  accountStatus: UserAccountStatus;
  updatedAt: Date;
  createdAt: Date;
}

export enum UserRole {
  ADMIN = 2,
  USER = 1,
}
export interface UserIdentity {
  firstName: string;
  lastName: string;
  birthDate: Date;
  country: string;
}

export interface UserPreferences {
  language: Language;
}

export interface UserAccountStatus {
  status: string;
  reason?: string;
  since?: Date;
  onboardingCompleted: boolean;
}

export enum UserAccountStatusType {
  ACTIVE = "active",
  DEACTIVATED = "deactivated",
  SUSPENDED = "suspended",
}
