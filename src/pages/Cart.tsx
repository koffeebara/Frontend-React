import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressSearch from "../components/AddressSearch";

interface ProductInfo {
  projectId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  farmer: string;
  location: string;
}

export default function Cart() {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [quantity, setQuantity] = useState(1);

  // 배송 정보
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  //결제 수단
  const [selected, setSelected] = useState("card");

  const navigate = useNavigate();

  useEffect(() => {
    // localStorage에서 상품 정보 읽어오기
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      const product = JSON.parse(savedProduct);
      setProductInfo(product);
      setQuantity(product.quantity || 1);
    } else {
      // 상품 정보가 없으면 메인으로 리다이렉트
      navigate("/");
    }
  }, [navigate]);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handlePayment = () => {
    if (!productInfo) return;

    // 주문 정보 유효성 검사
    if (!name || !phone || !postcode || !address) {
      alert("모든 배송 정보를 입력해주세요.");
      return;
    }

    // 주문 정보를 localStorage에 저장
    const orderInfo = {
      product: {
        ...productInfo,
        quantity: quantity,
      },
      delivery: {
        name,
        phone,
        postcode,
        address,
        detailAddress,
      },
      payment: {
        method: selected,
        totalAmount: productInfo.price * quantity + 3000, // 배송비 포함
      },
      orderDate: new Date().toISOString(),
    };

    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    navigate("/payment");
  };

  if (!productInfo) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg">상품 정보를 불러오는 중...</div>
      </div>
    );
  }

  const subtotal = productInfo.price * quantity;
  const shipping = 3000;
  const total = subtotal + shipping;

  return (
    <>
      <div className="w-full h-max bg-gray-100 p-4">
        <div className="flex flex-col w-full h-max items-center">
          <p
            className="text-green-700 w-full text-left cursor-pointer m-4"
            onClick={() => navigate(-1)}
          >
            &lt; 뒤로가기
          </p>

          {/* 상품 정보 */}
          <div className="flex flex-col h-max bg-white p-8 border border-gray-300 rounded-lg w-full">
            <h2 className="text-xl font-bold mb-4">상품 정보</h2>

            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <img
                src={productInfo.imageUrl}
                alt={productInfo.name}
                className="w-20 h-20 object-cover rounded-lg bg-gray-100"
              />

              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  {productInfo.farmer} • {productInfo.location}
                </p>
                <p className="font-semibold my-1">{productInfo.name}</p>
                <p className="font-bold text-[24px] text-mint-600 my-3">
                  {(productInfo.price * quantity).toLocaleString()}원
                </p>

                <div className="flex items-center mt-2 gap-2">
                  <div className="border border-gray-200">
                    <button
                      onClick={() => updateQuantity(quantity - 1)}
                      className="w-8 h-8 bg-gray-100 text-lg text-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-4">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(quantity + 1)}
                      className="w-8 h-8 bg-gray-100 text-lg text-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 가격 요약 */}
            <div className="flex justify-between bg-gray-100 rounded-lg px-8 py-4 mt-4">
              <div className="flex flex-col gap-1">
                <p>상품금액</p>
                <p>배송비</p>
                <p className="font-bold">총 결제금액</p>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p>{subtotal.toLocaleString()}원</p>
                <p>{shipping.toLocaleString()}원</p>
                <p className="font-bold text-lg text-mint-600">
                  {total.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>

          {/* 배송정보 */}
          <div className="flex flex-col h-max bg-white p-8 border border-gray-300 rounded-lg w-full my-8 gap-4">
            <h2 className="text-xl font-bold">배송정보</h2>

            <div className="flex gap-4">
              <div className="w-full">
                <p className="mb-2">이름 *</p>
                <input
                  type="text"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg"
                  placeholder="홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="w-full">
                <p className="mb-2">전화번호 *</p>
                <input
                  type="tel"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg"
                  placeholder="010-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 items-end">
              <div className="w-[150px]">
                <p className="mb-2">우편번호 *</p>
                <input
                  type="text"
                  className="w-full h-[50px] bg-gray-100 p-4 rounded-lg"
                  placeholder="12345"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  required
                />
              </div>

              <AddressSearch
                onSelect={(address, zonecode) => {
                  setPostcode(zonecode);
                  setAddress(address);
                }}
              />
            </div>

            <div className="w-full">
              <p className="mb-2">주소 *</p>
              <input
                type="text"
                className="w-full h-[50px] bg-gray-100 p-4 rounded-lg mb-2"
                placeholder="기본 주소"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                className="w-full h-[50px] bg-gray-100 p-4 rounded-lg"
                placeholder="상세 주소"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </div>
          </div>

          {/* 결제 방법 */}
          <div className="flex flex-col h-max bg-white p-8 border border-gray-300 rounded-lg w-full mb-8 gap-4">
            <h2 className="text-xl font-bold">결제 방법</h2>

            <div className="flex flex-col gap-3">
              <label
                className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                  selected === "card"
                    ? "bg-green-100 border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-sm border ${
                    selected === "card"
                      ? "bg-green-600 border-green-600"
                      : "bg-white border-gray-400"
                  }`}
                />
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selected === "card"}
                  onChange={(e) => setSelected(e.target.value)}
                  className="hidden"
                />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💳</span>
                  <div>
                    <p className="font-semibold">신용카드</p>
                    <p className="text-sm text-gray-600">카드 결제</p>
                  </div>
                </div>
              </label>

              <label
                className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                  selected === "bank"
                    ? "bg-green-100 border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-sm border ${
                    selected === "bank"
                      ? "bg-green-600 border-green-600"
                      : "bg-white border-gray-400"
                  }`}
                />
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selected === "bank"}
                  onChange={(e) => setSelected(e.target.value)}
                  className="hidden"
                />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏦</span>
                  <div>
                    <p className="font-semibold">무통장입금</p>
                    <p className="text-sm text-gray-600">계좌 이체</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* 결제하기 버튼 */}
          <div className="w-full">
            <button
              onClick={handlePayment}
              className="w-full bg-mint-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-mint-700 transition"
            >
              {total.toLocaleString()}원 결제하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
