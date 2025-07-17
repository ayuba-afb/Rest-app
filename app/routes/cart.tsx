import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

import Plaintain from "../welcome/image/Plantain.jpg";
import Pap from "../welcome/image/Pap and Akara.jpg";
import Spaghetti from "../welcome/image/Spaghetti.jpg";
import Jollof from "../welcome/image/Jollof.jpg";
import Egusi from "../welcome/image/Egusi.jpg";


export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export type DeliveryMethod = "pickup" | "standard" | "express";

interface CouponCalc {
  subtotalDiscount: number;
  overrideDelivery?: number;
}

interface CouponDef {
  code: string;
  description: string;
  apply: (subtotal: number, method: DeliveryMethod) => CouponCalc;
}

interface StoredSettings {
  deliveryMethod?: DeliveryMethod;
  showVAT?: boolean;
  couponCode?: string;
}

interface CartPageProps {
  onCheckout?: (grandTotal: number, items: CartItem[]) => void;
  disablePersistence?: boolean;
}


const VAT_RATE = 0.075;

const DELIVERY_FEES: Record<DeliveryMethod, number> = {
  pickup: 0,
  standard: 500,
  express: 1500,
};

const COUPONS: CouponDef[] = [
  {
    code: "SAVE10",
    description: "10% off food subtotal",
    apply: (subtotal) => ({ subtotalDiscount: subtotal * 0.1 }),
  },
  {
    code: "FREESHIP",
    description: "Free Standard Delivery",
    apply: (_subtotal, method) => ({
      subtotalDiscount: 0,
      overrideDelivery: method === "standard" ? 0 : undefined,
    }),
  },
];


const LS_CART = "localCart_v1";
const LS_SETTINGS = "localCartSettings_v1";

const formatNaira = (n: number): string =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(Math.round(n));

const safeParseNumber = (v: unknown, fallback = 0): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const safeParseCartItems = (raw: unknown): CartItem[] => {
  if (!Array.isArray(raw)) return [];
  const cleaned: CartItem[] = [];
  for (const r of raw) {
    if (
      r &&
      typeof r === "object" &&
      typeof (r as any).id === "number" &&
      typeof (r as any).name === "string" &&
      typeof (r as any).image === "string"
    ) {
      cleaned.push({
        id: (r as any).id,
        name: (r as any).name,
        image: (r as any).image,
        price: safeParseNumber((r as any).price),
        quantity: Math.max(1, safeParseNumber((r as any).quantity, 1)),
      });
    }
  }
  return cleaned;
};

const readCartFromLS = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_CART);
    if (!raw) return [];
    return safeParseCartItems(JSON.parse(raw));
  } catch {
    return [];
  }
};

const readSettingsFromLS = (): StoredSettings => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(LS_SETTINGS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const s: StoredSettings = {};
    if (
      parsed?.deliveryMethod === "pickup" ||
      parsed?.deliveryMethod === "standard" ||
      parsed?.deliveryMethod === "express"
    ) {
      s.deliveryMethod = parsed.deliveryMethod;
    }
    if (typeof parsed?.showVAT === "boolean") {
      s.showVAT = parsed.showVAT;
    }
    if (typeof parsed?.couponCode === "string") {
      s.couponCode = parsed.couponCode;
    }
    return s;
  } catch {
    return {};
  }
};

const writeCartToLS = (items: CartItem[]): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LS_CART, JSON.stringify(items));
  } catch {}
};

const writeSettingsToLS = (s: StoredSettings): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LS_SETTINGS, JSON.stringify(s));
  } catch {}
};

const findCoupon = (code: string): CouponDef | undefined =>
  COUPONS.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());

function preloadItems(): CartItem[] {
  return [
    { id: 1, name: "Jollof", image: Jollof, price: 2000, quantity: 1 },
    { id: 2, name: "Spaghetti", image: Spaghetti, price: 1500, quantity: 2 },
    { id: 3, name: "Plantain", image: Plaintain, price: 2500, quantity: 2 },
    { id: 5, name: "Pap and Akara", image: Pap, price: 3500, quantity: 2 },
    { id: 4, name: "Egusi", image: Egusi, price: 5500, quantity: 2 },
  ];
}

export default function CartPage({
  onCheckout,
  disablePersistence = false,
}: CartPageProps) {
  const navigate = useNavigate();


  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (disablePersistence) return preloadItems();
    const ls = readCartFromLS();
    return ls.length ? ls : preloadItems();
  });

 
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(() => {
    if (disablePersistence) return "standard";
    const s = readSettingsFromLS();
    return s.deliveryMethod ?? "standard";
  });

  const [showVAT, setShowVAT] = useState<boolean>(() => {
    if (disablePersistence) return true;
    const s = readSettingsFromLS();
    return s.showVAT ?? true;
  });

  const [couponInput, setCouponInput] = useState<string>(() => {
    if (disablePersistence) return "";
    const s = readSettingsFromLS();
    return s.couponCode ?? "";
  });

  const [appliedCoupon, setAppliedCoupon] = useState<CouponDef | null>(() =>
    couponInput ? findCoupon(couponInput) ?? null : null
  );
  const [couponStatus, setCouponStatus] = useState<"" | "ok" | "bad">(
    appliedCoupon ? "ok" : ""
  );


  useEffect(() => {
    if (disablePersistence) return;
    writeCartToLS(cartItems);
  }, [cartItems, disablePersistence]);

  useEffect(() => {
    if (disablePersistence) return;
    writeSettingsToLS({
      deliveryMethod,
      showVAT,
      couponCode: appliedCoupon?.code ?? "",
    });
  }, [deliveryMethod, showVAT, appliedCoupon, disablePersistence]);

 
  const handleRemove = (id: number): void => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantity = (id: number, type: "inc" | "dec"): void => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const qty =
          type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: qty };
      })
    );
  };

  const handleQuantityInput = (id: number, value: string): void => {
    const num = Math.max(1, Number(value) || 1);
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: num } : i))
    );
  };

  const clearCart = (): void => {
    if (confirm("Remove all items from cart?")) {
      setCartItems([]);
    }
  };

  const applyCoupon = (): void => {
    const found = findCoupon(couponInput);
    if (found) {
      setAppliedCoupon(found);
      setCouponStatus("ok");
    } else {
      setAppliedCoupon(null);
      setCouponStatus("bad");
    }
  };

  const clearCoupon = (): void => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponStatus("");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const couponResult = appliedCoupon?.apply(subtotal, deliveryMethod);
  const subtotalDiscount = couponResult?.subtotalDiscount ?? 0;
  const discountedSubtotal = Math.max(0, subtotal - subtotalDiscount);

  const baseDelivery = DELIVERY_FEES[deliveryMethod];
  const deliveryFee =
    couponResult?.overrideDelivery !== undefined
      ? couponResult.overrideDelivery
      : baseDelivery;

  const vatAmount = showVAT ? discountedSubtotal * VAT_RATE : 0;
  const grandTotal = discountedSubtotal + deliveryFee + vatAmount;

  const savingsPct =
    subtotalDiscount > 0 && subtotal > 0
      ? Math.round((subtotalDiscount / subtotal) * 100)
      : 0;

  const handleCheckout = (): void => {
    if (onCheckout) {
      onCheckout(grandTotal, cartItems);
    }
    navigate("/checkout", {
      state: {
        items: cartItems,
        total: grandTotal,
        deliveryMethod,
        vatIncluded: showVAT,
        appliedCoupon: appliedCoupon?.code ?? null,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 space-y-4 py-10">
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
    
          <div className="flex justify-end mb-4 gap-2">
            <button
              onClick={clearCart}
              className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>

      
          <div className="space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-lg p-4"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold capitalize">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        {formatNaira(item.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <button
                      onClick={() => handleQuantity(item.id, "dec")}
                      className="p-2 bg-white rounded hover:bg-gray-300"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityInput(
                          item.id,
                          (e.target as HTMLInputElement).value
                        )
                      }
                      className="w-14 text-center border border-gray-300 rounded py-1 text-sm text-black"
                    />
                    <button
                      onClick={() => handleQuantity(item.id, "inc")}
                      className="p-2 bg-white rounded hover:bg-gray-300"
                      aria-label="Increase quantity"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className="text-right mt-4 sm:mt-0 text-black">
                    <p className="font-bold">
                      {formatNaira(item.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm mt-1 hover:underline flex items-center gap-1"
                    >
                      <FaTrash className="text-sm" /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

       
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-gray-100 p-5 rounded-md shadow-sm space-y-4"
          >
            <h3 className="text-lg font-semibold mb-1 text-gray-800">
              Order Summary
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Delivery Method:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(["pickup", "standard", "express"] as DeliveryMethod[]).map(
                  (opt) => (
                    <label
                      key={opt}
                      className="inline-flex items-center gap-2 cursor-pointer text-sm text-black"
                    >
                      <input
                        type="radio"
                        name="delivery-method"
                        value={opt}
                        checked={deliveryMethod === opt}
                        onChange={() => setDeliveryMethod(opt)}
                      />
                      <span className="capitalize">{opt}</span>
                      <span className="text-gray-500">
                        {formatNaira(DELIVERY_FEES[opt])}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Promo Code:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput((e.target as HTMLInputElement).value);
                    setCouponStatus("");
                  }}
                  placeholder="Enter coupon"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-black"
                />
                <button
                  onClick={applyCoupon}
                  className="px-3 py-2 text-sm rounded bg-black text-white hover:bg-gray-800 transition"
                >
                  Apply
                </button>
                {appliedCoupon && (
                  <button
                    onClick={clearCoupon}
                    className="px-3 py-2 text-sm rounded bg-gray-300 hover:bg-gray-400 transition"
                  >
                    Clear
                  </button>
                )}
              </div>
              {couponStatus === "ok" && appliedCoupon && (
                <p className="text-green-600 text-xs">
                  Applied: {appliedCoupon.code} – {appliedCoupon.description}
                </p>
              )}
              {couponStatus === "bad" && (
                <p className="text-red-600 text-xs">Invalid coupon.</p>
              )}
            </div>

      
            <div className="flex items-center gap-2 text-sm text-black">
              <input
                id="vat-toggle"
                type="checkbox"
                checked={showVAT}
                onChange={(e) =>
                  setShowVAT((e.target as HTMLInputElement).checked)
                }
              />
              <label htmlFor="vat-toggle">Include VAT (7.5%)</label>
            </div>

            <hr className="my-2 text-black" />

            <div className="space-y-2 text-sm text-black">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              {subtotalDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>
                    Discount ({appliedCoupon?.code}
                    {savingsPct ? ` ${savingsPct}%` : ""}):
                  </span>
                  <span>-{formatNaira(subtotalDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>{formatNaira(deliveryFee)}</span>
              </div>
              {showVAT && (
                <div className="flex justify-between">
                  <span>VAT (7.5%):</span>
                  <span>{formatNaira(vatAmount)}</span>
                </div>
              )}
            </div>

            <hr className="my-2 text-black" />

            <div className="flex justify-between items-center text-lg text-black font-bold">
              <span>Total:</span>
              <span>{formatNaira(grandTotal)}</span>
            </div>

            <button
              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}
