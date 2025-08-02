interface CropCard {
  id: number;
  emoji: string;
  name: string;
  farmer: string;
  location: string;
  experience: string;
  rating: string;
  reviews: number;
  price: string;
  weight: string;
  participants: number;
  totalBoxes: number;
  completedBoxes: number;
  percentage: number;
  status: string;
  deadline: string;
  bgColor: string;
}

interface ProductType {
  id: number;
  emoji?: string;
  name?: string;
  title?: string;
  price: string | number;
  imageUrl?: string;
  farmer?: string;
  location?: string;
  experience?: string;
  rating?: string | number;
  reviews?: number;
  weight?: string;
  participants?: number;
  totalBoxes?: number;
  completedBoxes?: number;
  percentage?: number;
  status?: string;
  deadline?: string;
  bgColor?: string;
}

// 더미데이터 - API 데이터로 덮어쓰지 않을 기본값들
const defaultCropData = [
  {
    id: 1,
    title: "무농약 대추방울토마토",
    price: 20000,
    imageUrl: "",
    farmer: "김농부",
    location: "경기도 양평군",
    experience: "15년",
    rating: "4.9",
    reviews: 127,
    weight: "2kg",
    participants: 25,
    totalBoxes: 300,
    completedBoxes: 180,
    percentage: 60,
    status: "HOT",
    deadline: "5일 남음",
    bgColor: "from-red-400 to-orange-400",
  },
  {
    id: 2,
    title: "유기농 감자 세트",
    price: 18000,
    imageUrl: "",
    farmer: "이농부",
    location: "강원도 평창군",
    experience: "12년",
    rating: "4.7",
    reviews: 89,
    weight: "3kg",
    participants: 18,
    totalBoxes: 200,
    completedBoxes: 90,
    percentage: 45,
    status: "유기농 인증",
    deadline: "3일 남음",
    bgColor: "from-amber-400 to-yellow-300",
  },
  {
    id: 3,
    title: "친환경 쌈채소 모음",
    price: 15000,
    imageUrl: "",
    farmer: "박농부",
    location: "충남 아산시",
    experience: "8년",
    rating: "4.8",
    reviews: 156,
    weight: "1.5kg",
    participants: 32,
    totalBoxes: 150,
    completedBoxes: 120,
    percentage: 80,
    status: "베스트셀러",
    deadline: "1일 남음",
    bgColor: "from-green-300 to-green-300",
  },
];

interface CropSectionProps {
  product1?: ProductType;
  product2?: ProductType;
  product3?: ProductType;
}

const CropSection = ({ product1, product2, product3 }: CropSectionProps) => {
  // API 데이터와 더미 데이터를 병합하는 함수
  const mergeWithDefaults = (
    apiProduct: ProductType | null | undefined,
    defaultData: any
  ): ProductType => {
    if (apiProduct) {
      // API 데이터(id, title, price, imageUrl)만 덮어쓰고 나머지는 더미데이터 사용
      return {
        ...defaultData,
        id: apiProduct.id,
        title: apiProduct.title,
        price:
          typeof apiProduct.price === "number"
            ? apiProduct.price.toLocaleString()
            : apiProduct.price,
        imageUrl: apiProduct.imageUrl,
      };
    }
    return {
      ...defaultData,
      price:
        typeof defaultData.price === "number"
          ? defaultData.price.toLocaleString()
          : defaultData.price,
    };
  };

  // API 데이터와 더미 데이터를 병합 (처음 3개만 표시)
  const products: ProductType[] = [
    mergeWithDefaults(product1, defaultCropData[0]),
    mergeWithDefaults(product2, defaultCropData[1]),
    mergeWithDefaults(product3, defaultCropData[2]),
  ];

  return (
    <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="px-4 py-1 bg-orange-200 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-orange-900 text-sm font-semibold">
          이번 주 인기 농작물
        </span>
        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
          지금 참여 가능한 위탁 농작물
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {/* 첫 번째 상품 */}
        <div className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow-md p-6 outline-1 outline-offset-[-1px] outline-opacity-200/20">
          <div className="flex items-center gap-2 text-red-500 text-base font-semibold">
            ⏰ 마감까지 D-{products[0].deadline?.replace(/[^0-9]/g, "") || "00"}
          </div>
          <div className="w-full h-48 flex items-center justify-center text-6xl bg-opacity-000/5 rounded-2xl">
            {products[0].imageUrl ? (
              <img
                src={products[0].imageUrl}
                alt={products[0].title || products[0].name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : products[0].emoji ? (
              products[0].emoji
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 text-xl font-bold">
              {products[0].title || products[0].name}
            </div>
            <div className="flex flex-wrap gap-2 text-gray-600 text-xs">
              <span>📍 {products[0].farmer}</span>
              <span>{products[0].location}</span>
              <span>{products[0].experience}</span>
            </div>
            <div className="flex gap-2 text-gray-600 text-xs">
              <span>⭐️ {products[0].rating} / 5</span>
              <span>({products[0].reviews}개 후기)</span>
            </div>
            <div className="flex gap-2 items-center text-blue-500 text-lg font-bold">
              <span>{products[0].price}원</span>
              <span className="text-gray-600 text-sm font-normal">
                박스당 {products[0].weight}
              </span>
            </div>
          </div>
          <div className="w-full bg-mint-000 rounded-2xl px-4 py-3 flex flex-col gap-2">
            <div className="flex gap-1 items-center text-gray-800 text-base font-semibold">
              <span>달성률</span>
              <span>{products[0].percentage}%</span>
            </div>
            <div className="w-full h-3 bg-cool-gray-100 rounded-full overflow-hidden flex">
              <div
                className="h-3 bg-mint-500 rounded-l-full"
                style={{ width: `${products[0].percentage}%` }}
              ></div>
              <div className="flex-1"></div>
            </div>
            <div className="flex gap-1 text-cool-gray-700 text-sm">
              <span>
                총 {products[0].totalBoxes}박스 중 {products[0].completedBoxes}
                박스 위탁 완료!
              </span>
            </div>
          </div>
          <button className="w-full mt-2 px-6 py-3 bg-orange-400 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 text-base font-semibold hover:bg-orange-500 transition">
            상품 둘러보기
          </button>
        </div>

        {/* 두 번째 상품 */}
        <div className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow-md p-6 outline-1 outline-offset-[-1px] outline-opacity-200/20">
          <div className="flex items-center gap-2 text-red-500 text-base font-semibold">
            ⏰ 마감까지 D-{products[1].deadline?.replace(/[^0-9]/g, "") || "00"}
          </div>
          <div className="w-full h-48 flex items-center justify-center text-6xl bg-opacity-000/5 rounded-2xl">
            {products[1].imageUrl ? (
              <img
                src={products[1].imageUrl}
                alt={products[1].title || products[1].name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : products[1].emoji ? (
              products[1].emoji
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 text-xl font-bold">
              {products[1].title || products[1].name}
            </div>
            <div className="flex flex-wrap gap-2 text-gray-600 text-xs">
              <span>📍 {products[1].farmer}</span>
              <span>{products[1].location}</span>
              <span>{products[1].experience}</span>
            </div>
            <div className="flex gap-2 text-gray-600 text-xs">
              <span>⭐️ {products[1].rating} / 5</span>
              <span>({products[1].reviews}개 후기)</span>
            </div>
            <div className="flex gap-2 items-center text-blue-500 text-lg font-bold">
              <span>{products[1].price}원</span>
              <span className="text-gray-600 text-sm font-normal">
                박스당 {products[1].weight}
              </span>
            </div>
          </div>
          <div className="w-full bg-mint-000 rounded-2xl px-4 py-3 flex flex-col gap-2">
            <div className="flex gap-1 items-center text-gray-800 text-base font-semibold">
              <span>달성률</span>
              <span>{products[1].percentage}%</span>
            </div>
            <div className="w-full h-3 bg-cool-gray-100 rounded-full overflow-hidden flex">
              <div
                className="h-3 bg-mint-500 rounded-l-full"
                style={{ width: `${products[1].percentage}%` }}
              ></div>
              <div className="flex-1"></div>
            </div>
            <div className="flex gap-1 text-cool-gray-700 text-sm">
              <span>
                총 {products[1].totalBoxes}박스 중 {products[1].completedBoxes}
                박스 위탁 완료!
              </span>
            </div>
          </div>
          <button className="w-full mt-2 px-6 py-3 bg-orange-400 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 text-base font-semibold hover:bg-orange-500 transition">
            상품 둘러보기
          </button>
        </div>

        {/* 세 번째 상품 */}
        <div className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow-md p-6 outline-1 outline-offset-[-1px] outline-opacity-200/20">
          <div className="flex items-center gap-2 text-red-500 text-base font-semibold">
            ⏰ 마감까지 D-{products[2].deadline?.replace(/[^0-9]/g, "") || "00"}
          </div>
          <div className="w-full h-48 flex items-center justify-center text-6xl bg-opacity-000/5 rounded-2xl">
            {products[2].imageUrl ? (
              <img
                src={products[2].imageUrl}
                alt={products[2].title || products[2].name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : products[2].emoji ? (
              products[2].emoji
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 text-xl font-bold">
              {products[2].title || products[2].name}
            </div>
            <div className="flex flex-wrap gap-2 text-gray-600 text-xs">
              <span>📍 {products[2].farmer}</span>
              <span>{products[2].location}</span>
              <span>{products[2].experience}</span>
            </div>
            <div className="flex gap-2 text-gray-600 text-xs">
              <span>⭐️ {products[2].rating} / 5</span>
              <span>({products[2].reviews}개 후기)</span>
            </div>
            <div className="flex gap-2 items-center text-blue-500 text-lg font-bold">
              <span>{products[2].price}원</span>
              <span className="text-gray-600 text-sm font-normal">
                박스당 {products[2].weight}
              </span>
            </div>
          </div>
          <div className="w-full bg-mint-000 rounded-2xl px-4 py-3 flex flex-col gap-2">
            <div className="flex gap-1 items-center text-gray-800 text-base font-semibold">
              <span>달성률</span>
              <span>{products[2].percentage}%</span>
            </div>
            <div className="w-full h-3 bg-cool-gray-100 rounded-full overflow-hidden flex">
              <div
                className="h-3 bg-mint-500 rounded-l-full"
                style={{ width: `${products[2].percentage}%` }}
              ></div>
              <div className="flex-1"></div>
            </div>
            <div className="flex gap-1 text-cool-gray-700 text-sm">
              <span>
                총 {products[2].totalBoxes}박스 중 {products[2].completedBoxes}
                박스 위탁 완료!
              </span>
            </div>
          </div>
          <button className="w-full mt-2 px-6 py-3 bg-orange-400 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 text-base font-semibold hover:bg-orange-500 transition">
            상품 둘러보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default CropSection;
