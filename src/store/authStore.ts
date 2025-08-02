import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  setToken: (token: string) => void;
  removeToken: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLoggedIn: false,
      _hasHydrated: false,
      setToken: (token) => {
        set({ accessToken: token, isLoggedIn: true });
      },
      removeToken: () => {
        set({ accessToken: null, isLoggedIn: false });
        // localStorage에서 auth-storage 키를 완전히 제거
        localStorage.removeItem("auth-storage");
      },
      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
