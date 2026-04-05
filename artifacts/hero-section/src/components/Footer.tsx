export default function Footer() {
  return (
    <footer className="bg-white mt-[5px] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex items-start gap-6">

          {/* Contact Us */}
          <div className="min-w-[160px]">
            <h4 className="font-bold text-gray-900 text-sm mb-3 uppercase">Contact Us</h4>
            <ul className="space-y-1.5">
              {[
                "Help Center",
                "How to Buy",
                "Shipping & Delivery",
                "International Product Policy",
                "How to Return",
                "Question?",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-xs hover:text-[#f57224]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lazada */}
          <div className="min-w-[200px]">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Lazada</h4>
            <ul className="space-y-1.5">
              {[
                "About Lazada",
                "Affiliate Program",
                "Careers",
                "Terms & Conditions",
                "Privacy Policy",
                "Campaign Terms & Conditions",
                "Intellectual Property Protection",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-xs hover:text-[#f57224]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Always Better + App Buttons group */}
          <div className="flex items-center gap-4 self-center">
            {/* Always Better */}
            <div className="flex items-center gap-3 pr-4 border-r border-gray-200">
              <img
                src="/laz-app-icon.png"
                alt="Lazada App"
                className="w-[52px] h-[52px] rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <p className="text-[#f57224] font-semibold text-sm leading-snug">Always Better</p>
                <p className="text-gray-500 text-xs">Download the App</p>
              </div>
            </div>

            {/* App Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-appstore.png" alt="App Store" className="h-9 object-contain" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-googleplay.png" alt="Google Play" className="h-9 object-contain" />
                </a>
              </div>
              <div>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-appgallery.png" alt="AppGallery" className="h-9 object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Payment Methods / Delivery / Verified */}
      <div className="border-t border-gray-100 mt-2">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex gap-8">

          {/* Payment Methods */}
          <div className="flex-1">
            <p className="text-gray-500 text-xs mb-3">Payment Methods</p>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: "LAZADA\nWALLET", color: "#f57224", text: "white" },
                { label: "VISA", color: "#1a1f71", text: "white" },
                { label: "Maybank", color: "#fbcf0a", text: "#333" },
                { label: "CIMB", color: "#bb2525", text: "white" },
                { label: "Hong\nLeong", color: "#003087", text: "white" },
                { label: "Public\nBank", color: "#b30000", text: "white" },
                { label: "RHB", color: "#005baa", text: "white" },
                { label: "Bank\nIslam", color: "#006633", text: "white" },
                { label: "MyDebit", color: "#d4001a", text: "white" },
                { label: "7-Eleven", color: "#007b40", text: "white" },
                { label: "99\nSpeedmart", color: "#e2001a", text: "white" },
                { label: "Touch\nn Go", color: "#0099da", text: "white" },
                { label: "AMEX", color: "#2671b8", text: "white" },
                { label: "UnionPay", color: "#c0392b", text: "white" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="border border-gray-200 rounded flex items-center justify-center px-1 py-1.5 text-center"
                  style={{ backgroundColor: p.color, minHeight: "32px" }}
                >
                  <span className="text-[9px] font-bold leading-tight whitespace-pre-line" style={{ color: p.text }}>
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Services */}
          <div className="min-w-[200px]">
            <p className="text-gray-500 text-xs mb-3">Delivery Services</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="border border-gray-200 rounded px-2 py-1 flex items-center gap-1">
                  <span className="text-[#f57224] font-bold text-[10px]">Lazada</span>
                  <span className="text-gray-500 text-[10px]">Logistics</span>
                </div>
                <div className="border border-gray-200 rounded px-2 py-1">
                  <span className="text-[#7c3aed] font-bold text-[10px]">ninja</span>
                  <span className="text-gray-600 text-[10px]"> van</span>
                </div>
                <div className="border border-gray-200 rounded px-2 py-1">
                  <span className="text-[#005baa] font-bold text-[10px] tracking-wider">SKYNET</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="border border-gray-200 rounded px-2 py-1">
                  <span className="text-[#e2001a] font-bold text-[10px]">J&T</span>
                  <span className="text-gray-500 text-[9px]">EXPRESS</span>
                </div>
                <div className="border border-gray-200 rounded px-2 py-1">
                  <span className="text-[#e2001a] font-bold text-[10px]">J&T</span>
                  <span className="text-gray-500 text-[9px]">CARGO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verified by */}
          <div className="min-w-[160px]">
            <p className="text-gray-500 text-xs mb-3">Verified by</p>
            <div className="flex items-center gap-2">
              <div className="border border-gray-200 rounded px-2 py-1.5 text-center">
                <p className="text-[8px] text-gray-400 leading-none">ISO/IEC</p>
                <p className="text-[9px] font-bold text-gray-700 leading-none">27001</p>
                <p className="text-[7px] text-gray-400 leading-tight">Information Security<br/>Management</p>
              </div>
              <div className="border border-gray-200 rounded px-2 py-1.5 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[8px] font-bold text-[#003087]">PCI DSS</p>
                  <p className="text-[7px] text-[#e2001a] font-bold">@SCC</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-100 py-3">
        <p className="text-center text-gray-400 text-xs">© Lazada 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
