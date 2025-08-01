import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

type Props = {
  onSelect: (address: string, zonecode: string) => void;
};

export default function AddressSearch({ onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data: any) => {
    const { address, zonecode, addressType, bname, buildingName } = data;
    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') extraAddress += bname;
      if (buildingName !== '') {
        extraAddress += extraAddress ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress ? ` (${extraAddress})` : '';
    }

    onSelect(fullAddress, zonecode);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className='w-[100px] h-[50px] border rounded-lg'>주소 검색</button>
      {isOpen && (
        <div className="absolute top-full mt-2 md:left-1/2 z-50 bg-white border shadow-lg">
          <div className="flex justify-end p-2  bg-gray-100">
            <button onClick={() => setIsOpen(false)} className="text-sm text-gray-500">
              ✕
            </button>
          </div>
          <DaumPostcode onComplete={handleComplete} />
        </div>
      )}
    </>
  );
}

