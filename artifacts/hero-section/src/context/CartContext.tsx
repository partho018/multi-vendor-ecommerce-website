import { createContext, useContext, useReducer, ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  notification: string | null;
}

type CartAction =
  | { type: "ADD"; product: Product; qty?: number }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATE_QTY"; id: number; qty: number }
  | { type: "CLEAR" }
  | { type: "DISMISS_NOTIFICATION" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const qty = action.qty ?? 1;
      const existing = state.items.find((i) => i.product.id === action.product.id);
      const items = existing
        ? state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + qty }
              : i
          )
        : [...state.items, { product: action.product, quantity: qty }];
      return { ...state, items, notification: `"${action.product.name.slice(0, 30)}..." added to cart!` };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: action.qty <= 0
          ? state.items.filter((i) => i.product.id !== action.id)
          : state.items.map((i) =>
              i.product.id === action.id ? { ...i, quantity: action.qty } : i
            ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "DISMISS_NOTIFICATION":
      return { ...state, notification: null };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  notification: string | null;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  dismissNotification: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], notification: null });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        notification: state.notification,
        addToCart: (product, qty) => dispatch({ type: "ADD", product, qty }),
        removeFromCart: (id) => dispatch({ type: "REMOVE", id }),
        updateQty: (id, qty) => dispatch({ type: "UPDATE_QTY", id, qty }),
        clearCart: () => dispatch({ type: "CLEAR" }),
        dismissNotification: () => dispatch({ type: "DISMISS_NOTIFICATION" }),
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
