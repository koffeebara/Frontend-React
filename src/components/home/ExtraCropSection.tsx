interface ExtraCrop {
  emoji: string;
  name: string;
  price: string;
  participants: number;
}

interface ProductType {
  id: number;
  title?: string;
  price: string | number;
  imageUrl?: string;
}

// 더미데이터 - API 데이터로 덮어쓰지 않을 기본값들
const defaultExtraCropData = [
  { emoji: "🥕", name: "유기농 당근", price: "15,000", participants: 12 },
  { emoji: "🥬", name: "친환경 배추", price: "25,000", participants: 8 },
  { emoji: "🥒", name: "무농약 오이", price: "18,000", participants: 20 },
  { emoji: "🌽", name: "찰옥수수", price: "22,000", participants: 15 },
  { emoji: "🥔", name: "햇감자", price: "16,000", participants: 18 },
  { emoji: "🍆", name: "가지", price: "14,000", participants: 9 },
];

interface ExtraCropSectionProps {
  product4?: ProductType;
  product5?: ProductType;
  product6?: ProductType;
  product7?: ProductType;
  product8?: ProductType;
  product9?: ProductType;
}

const ExtraCropSection = ({
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
}: ExtraCropSectionProps) => {
  // API 데이터와 더미 데이터를 병합하는 함수
  const mergeWithDefaults = (
    apiProduct: ProductType | null | undefined,
    defaultData: any
  ) => {
    if (apiProduct) {
      return {
        ...defaultData,
        name: apiProduct.title || defaultData.name,
        price:
          typeof apiProduct.price === "number"
            ? apiProduct.price.toLocaleString()
            : apiProduct.price,
      };
    }
    return defaultData;
  };

  // API 데이터와 더미 데이터를 병합
  const extraCrops = [
    mergeWithDefaults(product4, defaultExtraCropData[0]),
    mergeWithDefaults(product5, defaultExtraCropData[1]),
    mergeWithDefaults(product6, defaultExtraCropData[2]),
    mergeWithDefaults(product7, defaultExtraCropData[3]),
    mergeWithDefaults(product8, defaultExtraCropData[4]),
    mergeWithDefaults(product9, defaultExtraCropData[5]),
  ];

  return (
    <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8">
      <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
        다른 농작물 둘러보기
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {extraCrops.map((crop, idx) => (
          <div
            key={idx}
            className="w-full max-w-[320px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow p-6 border border-opacity-200/20"
          >
            <div className="flex gap-1 items-center text-red-400 text-base font-semibold">
              <span>🚩</span>
              <span>{crop.participants}명 참여중!</span>
            </div>
            <div className="w-full h-40 flex items-center justify-center text-4xl bg-opacity-000/5 rounded-2xl">
              {crop.emoji}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-900 text-xl font-bold">{crop.name}</div>
              <div className="flex gap-2 items-center text-mint-700 text-lg font-bold">
                <span>{crop.price}원</span>
                <span className="text-gray-600 text-sm font-normal">
                  박스당 1박스
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCropSection;
