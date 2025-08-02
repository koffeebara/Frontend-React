interface SignupData {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  userType: "BUYER" | "FARMER";
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
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

// 응답이 유효한 JSON인지 확인하는 헬퍼 함수
const parseJsonResponse = async (response: Response): Promise<any> => {
  const responseText = await response.text();

  // HTML 응답인지 확인
  if (responseText.trim().startsWith("<!")) {
    throw new Error(
      "서버에서 HTML 응답을 받았습니다. API 엔드포인트를 확인해주세요."
    );
  }

  // 빈 응답인지 확인
  if (!responseText.trim()) {
    throw new Error("서버에서 빈 응답을 받았습니다.");
  }

  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error("JSON 파싱 실패:", responseText);
    throw new Error("서버 응답을 파싱할 수 없습니다.");
  }
};

// 개발 환경에서는 프록시 사용, 배포 환경에서는 실제 API URL 사용
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "" : "https://zerojae175-dev.store");

export const authService = {
  signup: async (userData: SignupData): Promise<SignupResponse> => {
    const url = `${API_BASE_URL}/api/users`;
    console.log("회원가입 요청 URL:", url); // 디버깅용

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include", // CORS 요청에 credentials 포함
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("회원가입 실패 응답:", errorText);
        throw new Error(`회원가입 실패: ${response.status}`);
      }

      const result = await parseJsonResponse(response);
      // phoneNumber 정보가 누락된 경우, userData에서 보완
      if (
        result &&
        result.user &&
        !result.user.phoneNumber &&
        userData.phoneNumber
      ) {
        result.user.phoneNumber = userData.phoneNumber;
      }
      return result;
    } catch (error) {
      console.error("회원가입 처리 중 오류:", error);

      // CORS 에러 특별 처리
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        throw new Error("서버 연결에 실패했습니다. CORS 설정을 확인해주세요.");
      }

      if (error instanceof Error) {
        throw error;
      }
      throw new Error("회원가입 처리 중 알 수 없는 오류가 발생했습니다.");
    }
  },

  /* 로그인 */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const url = `${API_BASE_URL}/api/auth/login`;
    console.log("로그인 요청 URL:", url); // 디버깅용

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("로그인 실패 응답:", errorText);
        throw new Error(`로그인 실패: ${response.status}`);
      }

      const data: ApiResponse<LoginResponse> =
        await parseJsonResponse(response);
      // phoneNumber 정보가 누락된 경우, credentials에서 보완
      if (
        data &&
        data.response &&
        data.response.user &&
        !data.response.user.phoneNumber &&
        credentials.email
      ) {
        // phoneNumber는 로그인 시 서버에서 반환하지 않을 수 있으므로, 필요시 추가 로직 구현
        // 여기서는 email만 보완, 실제 phoneNumber는 서버에서 반환해야 함
      }
      return data.response;
    } catch (error) {
      console.error("로그인 처리 중 오류:", error);

      // CORS 에러 특별 처리
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        throw new Error("서버 연결에 실패했습니다. CORS 설정을 확인해주세요.");
      }

      if (error instanceof Error) {
        throw error;
      }
      throw new Error("로그인 처리 중 알 수 없는 오류가 발생했습니다.");
    }
  },
};
