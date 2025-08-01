import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import AddressSearch from '../components/AddressSearch';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/CartItem';
import PaymentOption from '../components/PaymentOption';


export default function Cart() {
  const { items } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);


  // 주소
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  //결제 수단
  const [selected, setSelected] = useState('card');
  return (
    <>
      <div className='w-full h-max bg-gray-100 p-4'>
        {/* 상품 */}

        <div className='flex flex-col w-full h-max items-center'>

          <p className='text-green-700 w-full text-left cursor-pointer m-4'>&lt; 뒤로가기</p>

          <div className='flex flex-col h-max bg-white p-8 border border-gray-300 rounded-lg w-full'>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* 가격 요약 */}
              <div className="flex justify-between bg-gray-100 rounded-lg px-8 py-4">
                <div className="flex flex-col gap-1">
                  <p>상품금액</p>
                  <p>배송비</p>
                  <p>할인 금액</p>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <p>{total.toLocaleString()}원</p>
                  <p>3,000원</p>
                  <p className='text-red-600'>-2,000원</p>
                </div>
              </div>
            </div>
          </div>


          {/* 배송정보 */}
          <div className='flex flex-col h-max bg-white p-8 border border-gray-300 rounded-lg w-full my-8 gap-2'>

            <p className='heading-2 pb-4'>배송정보</p>

            <div className='flex gap-12'>
              {/* 이름 */}
              <div className=" w-full">
                <p>이름</p>
                <input
                  type="text"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg text-left"
                  placeholder="홍길동"
                  pattern="[0-9]{3}-[0-9]{3,4}-[0-9]{4}"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* {emailMessage && (
                <p className="text-center text-sm text-red-500">{emailMessage}</p>
              )} */}

              {/* 전화번호 */}
              <div className=" w-full">
                <p>전화번호</p>
                <input
                  type="tel"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg text-left"
                  placeholder="010-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* {emailMessage && (
                <p className="text-center text-sm text-red-500">{emailMessage}</p>
              )} */}
            </div>



            <div className='flex gap-4 items-end '>
              {/* 우편번호 */}
              <div className="w-[150px]">
                <p>우편번호</p>
                <input
                  type="text"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg text-left"
                  placeholder="12345"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>

              <AddressSearch onSelect={(address, zonecode) => {
                setPostcode(zonecode);
                setAddress(address);
              }}
              />
              {/* {postcodeMessage && (
  <p className="text-center text-sm text-red-500">{postcodeMessage}</p>
)} */}


            </div>


            {/* 주소 */}
            <div className="w-full">
              <p>주소</p>
              <input
                type="text"
                className="w-full h-[50px] bg-gray-100 p-4 rounded-lg  text-left"
                placeholder="주소를 입력하세요"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {/* {addressMessage && (
  <p className="text-center text-sm text-red-500">{addressMessage}</p>
)} */}

            {/* 상세주소 */}
            <div className="w-full">

              <input
                type="text"
                className="w-full h-[50px] bg-gray-100 p-4 rounded-lg text-left"
                placeholder="상세주소를 입력하세요"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </div>
            {/*detailAddressMessage && (
  <p className="text-center text-sm text-red-500">{detailAddressMessage}</p>
)} */}


          </div>
          {/* 결제 수단 */}
          <div className='flex flex-col h-max bg-white p-8 m-4 border border-gray-300 rounded-lg w-full gap-2'>
            <p className='heading-2 pb-4'>배송정보</p>
            <div className="flex flex-col gap-4">
              <PaymentOption
                id='card'
                selected={selected === 'card'}
                label="신용카드"
                description="간편한 빠른 결제"
                icon="💳"
                bg="bg-blue-200"
                onSelect={() => setSelected('card')}
              />

              <PaymentOption
                id='bank'
                selected={selected === 'bank'}
                label="계좌이체"
                description="실시간 계좌이체"
                icon="💵"
                bg="bg-orange-200"
                onSelect={() => setSelected('bank')}
              />
            </div>

          </div>

          {/* 결제하기 */}
          <div className='flex flex-col h-max rounded-lg w-full  gap-2'>

            <button className='bg-green-600 text-white rounded-lg py-4'>{total.toLocaleString()}원 결제하기</button>
          </div>
        </div>

      </div >
    </>
  )
}
