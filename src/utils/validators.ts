// 이메일 유효성 검사 함수 예시
export function validateEmail(email: string): boolean {
  // 간단한 이메일 정규식
  const re = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  return re.test(email);
}

export function validateName(name: string): boolean {
  // 이름은 최소 2자 이상
  return name.length >= 2;
}

// 비밀번호 유효성 검사
export function validatePassword(password: string): boolean {
  // 8자 이상, 영문자 1개 이상, 숫자 1개 이상, 특수문자 1개 이상
  const re =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return re.test(password);
}

// 실패 사유 제공
export function getPasswordValidationDetail(password: string) {
  return {
    length: password.length >= 8,
    letter: /[A-Za-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
  };
}
