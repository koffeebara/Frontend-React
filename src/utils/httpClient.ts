async function refreshAccessToken(): Promise<string> {
  const response = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("토큰 만료");
  }

  const data = await response.json();
  return data.response.accessToken;
}

export function createAuthenticatedFetch(
  getToken: () => string | null,
  setToken: (token: string) => void,
  removeToken: () => void
) {
  return async function authFetch(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const token = getToken();
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string>),
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    let response = await fetch(url, { ...options, headers });

    if (response.status === 401 && token) {
      try {
        const newToken = await refreshAccessToken();
        setToken(newToken);
        headers.Authorization = `Bearer ${newToken}`;
        response = await fetch(url, { ...options, headers });
      } catch (err) {
        removeToken();
        window.location.href = "/login";
        throw err;
      }
    }

    return response;
  };
}
