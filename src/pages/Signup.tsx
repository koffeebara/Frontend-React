import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import { authService } from "../../services/authService";
import { useState } from "react";
import SignUpCheckBox from "../components/SignUpCheckBox";

export default function Signup() {
  const {
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
  } = useFormValidation({ type: "signup" });

  const [selectedKey, setSelectedKey] = useState('buyer');
  const [agreementValid, setAgreementValid] = useState(false);

  const isValid =
    email &&
    password &&
    confirmPassword &&
    name &&
    phoneMiddle &&
    phoneLast &&
    phoneMiddle.length === 4 &&
    phoneLast.length === 4 &&
    !emailMessage &&
    !passwordMessage &&
    !confirmPasswordMessage &&
    !nameMessage &&
    !phoneMessage &&
    agreementValid;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    setSignupError("");

    try {
      console.log("회원가입 시도:", { email, password, name, phone: fullPhone, userType: selectedKey.toUpperCase() });
      const signupResponse = await authService.signup({
        email,
        password,
        name,
        phone: fullPhone,
        userType: selectedKey.toUpperCase() as 'BUYER' | 'FARMER',
      });
      console.log("회원가입 성공:", signupResponse);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      const errorMessage =
        error instanceof Error ? error.message : "회원가입에 실패했습니다.";
      setSignupError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // 역할 옵션
  const roles = [
    {
      key: 'buyer',
      icon: '🛒',
      title: '일반회원',
      description: '농작물 위탁에 참여해 배송받고 싶으신 분',
    },
    {
      key: 'farmer',
      icon: '🧑‍🌾',
      title: '농부',
      description: '위탁을 받아 농작물을 키우고 싶으신 분',
    },
  ];

  return (
    <div className="w-full mx-auto  p-4">
      {/* 뒤로 가기 */}
      <div className='flex flex-col w-full h-max items-center '>
        <Link to="/" className='text-green-700 w-full text-left cursor-pointer m-4'>
          &lt; 홈으로 돌아가기
        </Link>
      </div>
      <div className="flex flex-col w-full h-[272px] bg-mint-700 rounded-2xl px-4 justify-center items-center">
        <img src="/test_img.png" alt="" />
        <p className="text-[40px] text-white font-bold py-4">시고르팜 회원가입</p>
        <p className="text-white">시고르팜에 가입하고, 전문가와 함께 농작물을 키워보세요!</p>
      </div>
      <div className="w-full h-full bg-white rounded-2xl my-8 py-4">
        <p className="heading-1 px-4">어떤 역할로 가입하시나요?</p>
        <div className="flex h-[206px] gap-4 p-4">
          {roles.map((role) => (
            <button
              key={role.key}
              onClick={() => setSelectedKey(role.key)}
              className={`flex-1 flex flex-col items-center px-4 py-6 rounded-xl border text-center
              ${selectedKey === role.key
                  ? 'bg-green-100 border-green-500 shadow text-green-700'
                  : 'bg-gray-100 border-gray-200 text-gray-800'}
            `}
            >
              <p>{role.icon}</p>
              <div className="font-bold mb-1 py-4">{role.title}</div>
              <div className="text-sm text-gray-500">{role.description}</div>
            </button>
          ))}

        </div>

        {/* 정보를 입력해주세요. */}
        <p className="heading-1 mt-4 px-4">정보를 입력해주세요.</p>

        <div className="flex flex-col md:flex-row">
          {/* 이름 */}
          <div className="w-full mt-6 px-4">
            <div>
              <p className="font-bold pb-2">이름<span className="text-red-500">*</span></p>
              <input
                className="w-full bg-gray-100 p-4 rounded-xl border border-gray-300"
                placeholder="성함을 입력해주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {nameMessage && (
              <p className="text-sm text-red-500">{nameMessage}</p>
            )}
          </div>


          {/* 휴대폰 번호 */}
          <div className="w-full mt-6 px-4">
            <p className="font-bold pb-2">휴대폰 번호<span className="text-red-500">*</span></p>
            <div className="flex gap-2">
              <select 
                className="bg-gray-100 p-4 rounded-xl border border-gray-300 w-20"
                value={phonePrefix}
                onChange={(e) => setPhonePrefix(e.target.value)}
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <input
                className="flex-1 bg-gray-100 p-4 rounded-xl border border-gray-300"
                placeholder="1234"
                maxLength={4}
                value={phoneMiddle}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneMiddle(value);
                }}
              />
              <input
                className="flex-1 bg-gray-100 p-4 rounded-xl border border-gray-300"
                placeholder="5678"
                maxLength={4}
                value={phoneLast}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneLast(value);
                }}
              />
            </div>
            {phoneMessage && (
              <p className="text-sm text-red-500 mt-1">{phoneMessage}</p>
            )}
          </div>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* 이메일 */}
          <div className="mt-4 px-4">
            <p className="font-bold pb-2">이메일<span className="text-red-500">*</span></p>
            <input
              type="email"
              className="w-full bg-gray-100 p-4 rounded-xl border border-gray-300"
              placeholder="이메일 주소를 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailMessage && (
            <p className="ml-4 text-sm text-red-500">{emailMessage}</p>
          )}

          <div className="flex flex-col md:flex-row">
            {/* 비밀번호 */}
            <div className="w-full mt-6 px-4">
              <div>
                <p className="font-bold pb-2">비밀번호<span className="text-red-500">*</span></p>
                <input
                  className="w-full bg-gray-100 p-4 rounded-xl border border-gray-300"
                  placeholder="비밀번호"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {password.length > 0 && passwordMessage && (
                <p className="ml-4 text-sm text-red-500">{passwordMessage}</p>
              )}
            </div>

            {/* 비밀번호 확인 */}
            <div className="w-full mt-6 px-4">
              <p className="font-bold pb-2">비밀번호 확인<span className="text-red-500">*</span></p>
              <input
                className="w-full bg-gray-100 p-4 rounded-xl border border-gray-300"
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordMessage && (
                <p className="ml-4 text-sm text-red-500 mt-1">{confirmPasswordMessage}</p>
              )}
            </div>
          </div>
          {/* 회원가입 에러 메시지 */}
          {signupError && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {signupError}
            </div>
          )}

          {/* 동의 */}
          <div className="mx-4 pt-8">
            <SignUpCheckBox onValidationChange={setAgreementValid} />
          </div>

          {/* 회원가입 */}
          <div className="mt-8  px-4">
            <button
              className={`w-full p-4 text-center cursor-pointer rounded-xl
            ${isValid && !isLoading ? "bg-green-700 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
              disabled={!isValid || isLoading}
              type="submit"
            >
              {isLoading ? "회원가입 중..." : "회원가입"}
            </button>
          </div>
        </form>
        <div className=" px-4">
          <p className="w-full h-[56px] text-center bg-gray-200 mt-8 rounded-xl p-4 ">둘러보기</p>

        </div>

      </div>


      {/* 하단 텍스트 */}
      <div className="flex justify-center text-gray-500 mb-8 gap-16">
        <p>이미 계정이 있으신가요?</p>
        <p>
          <Link to="/login" className="text-green-700">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}