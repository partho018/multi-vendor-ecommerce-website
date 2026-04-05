export default function Footer() {
  return (
    <footer className="bg-white mt-[5px]">
      {/* Main footer links */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex gap-12">
          {/* Contact Us */}
          <div className="min-w-[160px]">
            <h4 className="font-bold text-gray-900 text-sm mb-3">CONTACT US</h4>
            <ul className="space-y-1.5">
              {["Help Center", "How to Buy", "Shipping & Delivery", "International Product Policy", "How to Return", "Question?", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-xs hover:text-[#f57224] hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lazada */}
          <div className="min-w-[160px]">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Lazada</h4>
            <ul className="space-y-1.5">
              {["About Lazada", "Affiliate Program", "Careers", "Terms & Conditions", "Privacy Policy", "Campaign Terms & Conditions", "Intellectual Property Protection"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-xs hover:text-[#f57224] hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Download App */}
          <div className="flex flex-col items-start gap-3">
            {/* Always Better */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img src="/icon-cart.png" alt="Lazada" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[#f57224] font-semibold text-sm leading-tight">Always Better</p>
                <p className="text-gray-500 text-xs">Download the App</p>
              </div>
            </div>

            {/* App buttons row 1 */}
            <div className="flex gap-2">
              {/* App Store */}
              <a href="#" className="flex items-center gap-1.5 border border-gray-800 rounded px-3 py-1.5 bg-black text-white hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <div className="text-[8px] leading-none">Available on the</div>
                  <div className="text-xs font-semibold leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="flex items-center gap-1.5 border border-gray-800 rounded px-3 py-1.5 bg-black text-white hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M3.18 23.76c.3.17.64.22.99.14l12.47-7.19-2.79-2.79-10.67 9.84zm-1.42-20.5C1.45 3.7 1.25 4.2 1.25 4.82v14.36c0 .62.2 1.12.51 1.56l.08.07 8.04-8.04v-.18L1.76 3.26l-.00.00zm17.12 9.06l-2.23-1.29-3.14 3.14 3.14 3.14 2.24-1.29c.64-.37.64-.97 0-1.34l-.01-.36zm-15.2-9.63L15.64 9.9l-2.79 2.79-9.17-9.00z"/></svg>
                <div>
                  <div className="text-[8px] leading-none">ANDROID APP ON</div>
                  <div className="text-xs font-semibold leading-tight">Google play</div>
                </div>
              </a>
            </div>

            {/* AppGallery */}
            <a href="#" className="flex items-center gap-1.5 border border-gray-800 rounded px-3 py-1.5 bg-black text-white hover:bg-gray-800 transition-colors w-full justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              <div>
                <div className="text-[8px] leading-none">EXPLORE IT ON</div>
                <div className="text-xs font-semibold leading-tight">AppGallery</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-3">
        <p className="text-center text-gray-400 text-xs">© Lazada 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
