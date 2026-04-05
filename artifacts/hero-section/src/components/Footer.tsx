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

          {/* Always Better — center area */}
          <div className="flex items-center gap-3 self-center">
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

          {/* Spacer */}
          <div className="flex-1" />

          {/* App Buttons */}
          <div className="flex flex-col gap-2 self-center">
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

      {/* Bottom copyright */}
      <div className="border-t border-gray-100 py-3">
        <p className="text-center text-gray-400 text-xs">© Lazada 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
