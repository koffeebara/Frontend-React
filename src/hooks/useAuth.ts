import { useLocalStorage } from "./useLocalStorage";
import { createAuthenticatedFetch } from "../utils/httpClient";

/**
 * 인증 상태와 관련 함수들을 관리하는 커스텀 훅
 */
export const useAuth = () => {
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage(
    "accessToken",
    ""
  );

  // 인증된 fetch 함수 생성
  const authenticatedFetch = createAuthenticatedFetch(
    () => accessToken,
    setAccessToken,
    removeAccessToken
  );

  // 토큰 저장
  const saveToken = (token: string) => {
    setAccessToken(token);
  };

  // 로그아웃
  const logout = () => {
    removeAccessToken();
  };

  // 로그인 상태 확인
  const isLoggedIn = Boolean(accessToken);

  return {
    accessToken,
    isLoggedIn,
    saveToken,
    logout,
    authenticatedFetch,
  };
};
