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

export const authService = {
  /* 회원가입 */
  signup: async (userData: SignupData): Promise<SignupResponse> => {
    const response = await fetch("/api/v1/users", {
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
    const response = await fetch("/api/v1/auth/login", {
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
