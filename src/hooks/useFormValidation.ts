import { useState } from "react";
import {
  validateEmail,
  getPasswordValidationDetail,
} from "../utils/validators";

export function useFormValidation({ type }: { type: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
    if (!passwordDetail.special) passwordMessages.push("특수문자");
    if (password.length > 0) {
      if (passwordMessages.length === 1 && passwordMessages[0] === "8자 이상") {
        passwordMessage = "비밀번호는 8자 이상이어야 합니다.";
      } else if (passwordMessages.length > 0) {
        passwordMessage = `비밀번호는 ${passwordMessages.join(", ")}를 포함해야 합니다.`;
      }
    }
  } else if (type === "login") {
    if (password.length === 0) {
      passwordMessage = "비밀번호를 입력해주세요.";
    }
  }

  // 이름 (회원가입일 때만)
  let nameMessage = "";
  if (type === "signup" && name.length > 0 && name.length < 2) {
    nameMessage = "이름은 2자 이상이어야 합니다.";
  }

  return {
    email,
    setEmail,
    emailMessage,
    password,
    setPassword,
    passwordMessage,
    name,
    setName,
    nameMessage,
  };
}
