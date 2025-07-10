/**
 * HTTP 클라이언트 - 인터셉터와 자동 재시도 로직 포함
 */

// 토큰 재발급 함수
const refreshTokenRequest = async () => {
  try {
    const response = await fetch("/api/v1/auth/refresh", {
      method: "POST",
      credentials: "include", // HttpOnly 쿠키 포함
    });

    if (response.ok) {
      const data = await response.json();
      return data.response.accessToken;
    } else {
      throw new Error("토큰 재발급 실패");
    }
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    throw error;
  }
};

/**
 * 인증이 필요한 API 호출을 처리하는 HTTP 클라이언트
 * 401 에러 시 자동으로 토큰 재발급 후 재시도
 */
export const createAuthenticatedFetch = (getToken, setToken, removeToken) => {
  return async (url, options = {}) => {
    const makeRequest = async (token) => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
    };

    // 첫 번째 요청
    let response = await makeRequest(getToken());

    // 401 에러 시 토큰 재발급 후 재시도
    if (response.status === 401 && getToken()) {
      console.log("토큰이 만료되었습니다. 재발급을 시도합니다...");

      try {
        const newToken = await refreshTokenRequest();
        setToken(newToken);
        console.log("새 토큰으로 재시도합니다...");
        response = await makeRequest(newToken);
      } catch (error) {
        // RefreshToken도 만료된 경우
        removeToken();
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        throw error;
      }
    }

    return response;
  };
};
