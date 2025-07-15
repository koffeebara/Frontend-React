import { useState } from "react";

/**
 * localStorage와 동기화되는 상태를 관리하는 커스텀 훅
 * @param {string} key - localStorage 키
 * @param {T} initialValue - 초기값
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] => {
  // localStorage에서 초기값 읽기
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`localStorage에서 ${key} 읽기 실패:`, error);
      return initialValue;
    }
  });

  // 값 설정 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 함수인 경우 실행
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`localStorage에 ${key} 저장 실패:`, error);
    }
  };

  // 값 제거 함수
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`localStorage에서 ${key} 제거 실패:`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};
