import { useState } from "react";
import { useLocation } from "wouter";
import { Eye, EyeOff, User, Mail, Lock, Phone, AlertCircle, CheckCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Mode = "login" | "register";

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [, navigate] = useLocation();
  const { login, register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = (m: Mode) => {
    setMode(m);
    setError("");
    setName(""); setEmail(""); setPhone("");
    setPassword(""); setConfirmPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (mode === "login") {
        const result = login(email, password);
        if (result.success) {
          navigate("/account");
        } else {
          setError(result.error || "Login failed.");
        }
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          setLoading(false);
          return;
        }
        const result = register(name, email, password, phone);
        if (result.success) {
          navigate("/account");
        } else {
          setError(result.error || "Registration failed.");
        }
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[480px] mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => reset("login")}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                mode === "login"
                  ? "text-[#f57224] border-b-2 border-[#f57224]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => reset("register")}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                mode === "register"
                  ? "text-[#f57224] border-b-2 border-[#f57224]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Register
            </button>
          </div>

          <div className="p-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg viewBox="0 0 40 40" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
              </svg>
              <span className="text-2xl font-bold text-[#f57224]">Lazada</span>
            </div>

            <h2 className="text-center text-gray-800 font-semibold text-lg mb-6">
              {mode === "login" ? "Welcome back!" : "Create your account"}
            </h2>

            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-md px-3 py-2.5 mb-4 text-sm">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Full Name *</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#f57224] focus:ring-1 focus:ring-[#f57224]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Email Address *</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#f57224] focus:ring-1 focus:ring-[#f57224]"
                  />
                </div>
              </div>

              {mode === "register" && (
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Phone Number (optional)</label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 01712345678"
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#f57224] focus:ring-1 focus:ring-[#f57224]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Password *</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === "register" ? "Min. 6 characters" : "Enter your password"}
                    required
                    className="w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#f57224] focus:ring-1 focus:ring-[#f57224]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Confirm Password *</label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat your password"
                      required
                      className="w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#f57224] focus:ring-1 focus:ring-[#f57224]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {confirmPassword && password === confirmPassword && (
                    <div className="flex items-center gap-1 mt-1 text-green-600 text-xs">
                      <CheckCircle size={12} /> Passwords match
                    </div>
                  )}
                </div>
              )}

              {mode === "login" && (
                <div className="text-right">
                  <button type="button" className="text-xs text-[#f57224] hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f57224] hover:bg-[#e06510] text-white font-semibold py-3 rounded-md text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-500 mt-5">
              {mode === "login" ? (
                <>Don't have an account?{" "}
                  <button onClick={() => reset("register")} className="text-[#f57224] font-semibold hover:underline">
                    Register now
                  </button>
                </>
              ) : (
                <>Already have an account?{" "}
                  <button onClick={() => reset("login")} className="text-[#f57224] font-semibold hover:underline">
                    Login
                  </button>
                </>
              )}
            </p>

            {mode === "register" && (
              <p className="text-center text-[10px] text-gray-400 mt-3">
                By creating an account, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
