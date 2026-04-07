import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider, useCart } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import HeroPage from "@/pages/HeroPage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AccountPage from "@/pages/AccountPage";
import LoginPage from "@/pages/LoginPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function CartNotification() {
  const { notification, dismissNotification } = useCart();
  useEffect(() => {
    if (notification) {
      const t = setTimeout(dismissNotification, 3000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  if (!notification) return null;
  return (
    <div
      className="fixed top-4 right-4 z-[9999] bg-white border border-green-200 shadow-lg rounded-lg px-4 py-3 max-w-[320px] flex items-start gap-3"
      style={{ animation: "slideIn 0.3s ease-out" }}
    >
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">Added to Cart!</p>
        <p className="text-xs text-gray-500 truncate">{notification}</p>
      </div>
      <button onClick={dismissNotification} className="text-gray-300 hover:text-gray-500 flex-shrink-0">✕</button>
    </div>
  );
}

function ProtectedAccount() {
  const { isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);
  if (!isAuthenticated) return null;
  return <AccountPage />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HeroPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/product/:id" component={ProductDetailPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/account" component={ProtectedAccount} />
      <Route path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <ScrollToTop />
              <CartNotification />
              <Router />
            </WouterRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
