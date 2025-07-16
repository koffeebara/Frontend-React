import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),
  isLoggedIn: !!localStorage.getItem("accessToken"),
  setToken: (token) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token, isLoggedIn: true });
  },
  removeToken: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: null, isLoggedIn: false });
  },
}));
