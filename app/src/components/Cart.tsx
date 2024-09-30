import React, { useState, useEffect } from "react";
import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  closeCart: () => void;
  cartItems: CartItem[];
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  closeCart,
  cartItems,
  removeFromCart,
  updateQuantity,
  clearCart,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [promoCode, setPromoCode] = useState<string>("");

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const applyPromoCode = (): void => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(total * 0.1);
    } else {
      alert("Invalid promo code");
    }
  };

  const handleCheckout = (): void => {
    alert("Proceeding to checkout...");
  };

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 transform bg-white shadow-lg ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto transition-transform duration-300 ease-in-out`}
    >
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <div className="mb-2 flex justify-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="mb-2 flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="mt-2 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${(total - discount).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPromoCode(e.target.value)
                }
                className="w-full rounded border border-gray-300 p-2"
              />
              <button
                onClick={applyPromoCode}
                className="mt-2 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Apply Promo Code
              </button>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 w-full rounded bg-green-500 px-4 py-3 text-white hover:bg-green-600"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};
