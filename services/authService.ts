interface SignupData {
  email: string;
  password: string;
  name: string;
  phone: string;
  userType: 'BUYER' | 'FARMER';
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

// 응답이 유효한 JSON인지 확인하는 헬퍼 함수
const parseJsonResponse = async (response: Response): Promise<any> => {
  const responseText = await response.text();
  
  // HTML 응답인지 확인
  if (responseText.trim().startsWith('<!')) {
    throw new Error('서버에서 HTML 응답을 받았습니다. API 엔드포인트를 확인해주세요.');
  }
  
  // 빈 응답인지 확인
  if (!responseText.trim()) {
    throw new Error('서버에서 빈 응답을 받았습니다.');
  }
  
  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error('JSON 파싱 실패:', responseText);
    throw new Error('서버 응답을 파싱할 수 없습니다.');
  }
};

// 개발 환경에서는 프록시 사용, 배포 환경에서는 실제 API URL 사용
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV ? "" : "https://zerojae175-dev.store");

export const authService = {
  signup: async (userData: SignupData): Promise<SignupResponse> => {
    const url = `${API_BASE_URL}/api/v1/users`;
    console.log('회원가입 요청 URL:', url); // 디버깅용
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('회원가입 실패 응답:', errorText);
      throw new Error(`회원가입 실패: ${response.status}`);
    }

    return parseJsonResponse(response);
  },

  /* 로그인 */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const url = `${API_BASE_URL}/api/v1/auth/login`;
    console.log('로그인 요청 URL:', url); // 디버깅용
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('로그인 실패 응답:', errorText);
        throw new Error(`로그인 실패: ${response.status}`);
      }

      const data: ApiResponse<LoginResponse> = await parseJsonResponse(response);
      return data.response; // { accessToken, user }
    } catch (error) {
      console.error('로그인 처리 중 오류:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('로그인 처리 중 알 수 없는 오류가 발생했습니다.');
    }
  },
};
