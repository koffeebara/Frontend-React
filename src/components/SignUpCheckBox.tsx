import { useState, useEffect } from "react";

interface SignUpCheckBoxProps {
  onValidationChange?: (isValid: boolean) => void;
}

export default function SignUpCheckBox({
  onValidationChange,
}: SignUpCheckBoxProps) {
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const allChecked = Object.values(agreements).every(Boolean);
  const requiredChecked = agreements.terms && agreements.privacy;

  useEffect(() => {
    onValidationChange?.(requiredChecked);
  }, [requiredChecked, onValidationChange]);

  const toggleAll = () => {
    const newValue = !allChecked;
    setAgreements({
      terms: newValue,
      privacy: newValue,
      marketing: newValue,
    });
  };

  const toggleOne = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl w-full space-y-4 text-sm border border-gray-300">
      {/* 전체 동의 */}
      <label className="flex items-center space-x-2 font-medium text-base">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={toggleAll}
          className="w-4 h-4"
        />
        <span>전체 동의</span>
      </label>

      {/* 개별 항목 */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={agreements.terms}
          onChange={() => toggleOne("terms")}
          className="w-4 h-4"
        />
        <span>
          <span className="text-black font-medium">[필수] </span>
          <span className="text-green-800 font-medium">이용약관</span> 동의
        </span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={agreements.privacy}
          onChange={() => toggleOne("privacy")}
          className="w-4 h-4"
        />
        <span>
          <span className="text-black font-medium">[필수] </span>
          <span className="text-green-800 font-medium">
            개인정보 처리방침
          </span>{" "}
          동의
        </span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={agreements.marketing}
          onChange={() => toggleOne("marketing")}
          className="w-4 h-4"
        />
        <span>
          <span className="text-black font-medium">[선택] </span>
          <span className="text-green-800 font-medium">
            마케팅 정보 수신
          </span>{" "}
          동의
        </span>
      </label>
    </div>
  );
}
