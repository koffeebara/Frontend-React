import { useCartStore, type CartItemType } from '../store/cartStore';

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-8 items-center">
      <img
        src="/test_img.png"
        alt="상품 이미지"
        className="rounded-lg w-24 h-24 object-cover"
      />

      <div className="flex-1">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">달콤하고 신선한 친환경 옥수수</p>

        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="w-8 h-8 rounded bg-gray-200 text-lg"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded bg-gray-200 text-lg"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 text-sm text-red-500"
          >
            삭제
          </button>
        </div>
      </div>

      <p className="text-right font-semibold w-20">
        {(item.price * item.quantity).toLocaleString()}원
      </p>
    </div>
  );
}
