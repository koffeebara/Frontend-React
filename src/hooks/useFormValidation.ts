import { useState } from "react";
import {
  validateEmail,
  getPasswordValidationDetail,
} from "../utils/validators";

export function useFormValidation({ type }: { type: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  
  // 휴대폰 번호를 분리된 필드로 관리
  const [phonePrefix, setPhonePrefix] = useState("010");
  const [phoneMiddle, setPhoneMiddle] = useState("");
  const [phoneLast, setPhoneLast] = useState("");

  // 이메일
  let emailMessage = "";
  if (email.length > 0 && !validateEmail(email)) {
    emailMessage = "올바른 이메일 형식을 입력해주세요.";
  }

  // 비밀번호
  let passwordMessage = "";
  if (type === "signup") {
    const passwordDetail = getPasswordValidationDetail(password);
    const passwordMessages = [];
    if (!passwordDetail.length) passwordMessages.push("8자 이상");
    if (!passwordDetail.letter) passwordMessages.push("영문자");
    if (!passwordDetail.number) passwordMessages.push("숫자");

    if (password.length > 0) {
      if (passwordMessages.length === 1 && passwordMessages[0] === "8자 이상") {
        passwordMessage = "비밀번호는 8자 이상이어야 합니다.";
      } else if (passwordMessages.length > 0) {
        passwordMessage = `비밀번호는 ${passwordMessages.join(", ")}를 포함해야 합니다.`;
      }
    }
  }

  // 이름 (회원가입일 때만)
  let nameMessage = "";
  if (type === "signup" && name.length > 0 && name.length < 2) {
    nameMessage = "이름은 2자 이상이어야 합니다.";
  }

  // 비밀번호 확인 (회원가입일 때만)
  let confirmPasswordMessage = "";
  if (type === "signup" && confirmPassword.length > 0 && password !== confirmPassword) {
    confirmPasswordMessage = "비밀번호가 일치하지 않습니다.";
  }

  // 휴대폰 번호 (회원가입일 때만)
  let phoneMessage = "";
  const fullPhone = `${phonePrefix}${phoneMiddle}${phoneLast}`;
  
  if (type === "signup") {
    if (phoneMiddle.length > 0 && phoneMiddle.length !== 4) {
      phoneMessage = "가운데 번호는 4자리여야 합니다.";
    } else if (phoneLast.length > 0 && phoneLast.length !== 4) {
      phoneMessage = "마지막 번호는 4자리여야 합니다.";
    } else if (phoneMiddle.length === 4 && phoneLast.length === 4) {
      const phoneRegex = /^010\d{8}$/;
      if (!phoneRegex.test(fullPhone)) {
        phoneMessage = "올바른 휴대폰 번호를 입력해주세요.";
      }
    }
  }

  return {
    email,
    setEmail,
    emailMessage,
    password,
    setPassword,
    passwordMessage,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordMessage,
    name,
    setName,
    nameMessage,
    phonePrefix,
    setPhonePrefix,
    phoneMiddle,
    setPhoneMiddle,
    phoneLast,
    setPhoneLast,
    phoneMessage,
    fullPhone,
  };
}
