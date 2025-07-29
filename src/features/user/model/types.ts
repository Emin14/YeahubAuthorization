import type { SerializedError } from "@reduxjs/toolkit";

export type LoginRequest = {
  username: string;
  password: string;
};

export type RegistrationRequest = {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type User = {
  id: string;
  username: string;
  phone: string;
  country: string | null;
  city: string | null;
  email: string;
  birthday: string | null;
  address: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isEmailVerified: boolean;
  userRoles: [
    {
      id: number;
      name: string;
      permissions: string[];
    },
  ];
};

export type UserResponse = {
  access_token: string;
  user: User;
};

export type LogoutResponse = {
  ok: boolean;
  status: number;
};

export type ApiError =
  | {
      status: number;
      data: { message?: string; statusCode: number; description: string };
    }
  | SerializedError
  | undefined;

export function getApiErrorMessage(error: ApiError): string {
  if (!error) {
    return "Неизвестная ошибка";
  }

  if ("status" in error && "data" in error) {
    return error.data?.message || `Ошибка ${error.status}`;
  }

  if ("message" in error) {
    return error.message || "Ошибка клиента";
  }

  return "Неизвестная ошибка";
}
