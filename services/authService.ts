interface SignupData {
  email: string;
  password: string;
  name: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface LoginResponse {
  accessToken: string;
  user: User;
}

interface SignupResponse {
  user: User;
  message?: string;
}

interface ApiResponse<T> {
  response: T;
}

// API 호출 시 공통적으로 사용할 기본 URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const authService = {
  signup: async (userData: SignupData): Promise<SignupResponse> => {
    const url = `${API_BASE_URL}/api/v1/users`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`회원가입 실패: ${response.status}`);
    }

    return response.json();
  },

  /* 로그인 */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const url = `${API_BASE_URL}/api/v1/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`로그인 실패: ${response.status}`);
    }

    const data: ApiResponse<LoginResponse> = await response.json();
    return data.response; // { accessToken, user }
  },
};
