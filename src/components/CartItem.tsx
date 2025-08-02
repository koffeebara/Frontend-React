import { useCartStore, type CartItemType } from '../store/cartStore';

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div>
      <p className='title-2'>Label</p>
      <div className="flex gap-8 items-center">
        <img
          src="/test_img.png"
          alt="상품 이미지"
          className="rounded-lg w-[30%] aspect-[4/3] min-w-[160px] object-cover"
        />

        <div className="flex-1">
          <p className="text-sm text-gray-500">{item.name}</p>
          <p className="my-1">달콤하고 신선한 친환경 옥수수</p>
          <p className="font-bold text-[24px] text-mint-600 my-3">
            {(item.price * item.quantity).toLocaleString()}원
          </p>

          <div className="flex items-center mt-2 gap-2">
            <div className='border border-gray-200'>
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 bg-gray-100 text-lg text-gray-400"
              >
                -
              </button>
              <span className='mx-4'>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 bg-gray-100 text-lg  text-gray-400"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="ml-4 text-sm text-red-500"
            >
              삭제
            </button>
          </div>
        </div>


      </div>
    </div>

  );
}
