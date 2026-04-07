export default function Footer() {
  return (
    <footer className="bg-white mt-[5px] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-6 flex-shrink-0">
            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 uppercase">Contact Us</h4>
              <ul className="space-y-1.5">
                {["Help Center", "How to Buy", "Shipping & Delivery", "International Product Policy", "How to Return", "Question?", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 text-xs hover:text-[#f57224]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lazada */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Lazada</h4>
              <ul className="space-y-1.5">
                {["About Lazada", "Affiliate Program", "Careers", "Terms & Conditions", "Privacy Policy", "Campaign Terms & Conditions", "Intellectual Property Protection"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 text-xs hover:text-[#f57224]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spacer - only on desktop */}
          <div className="hidden sm:block flex-1" />

          {/* App download section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start sm:self-center">
            <div className="flex items-center gap-3 pb-3 sm:pb-0 sm:pr-4 border-b sm:border-b-0 sm:border-r border-gray-200">
              <img src="/laz-app-icon.png" alt="Lazada App" className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-xl object-cover flex-shrink-0" />
              <div>
                <p className="text-[#f57224] font-semibold text-sm leading-snug">Always Better</p>
                <p className="text-gray-500 text-xs">Download the App</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-appstore.png" alt="App Store" className="h-8 sm:h-9 object-contain" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-googleplay.png" alt="Google Play" className="h-8 sm:h-9 object-contain" />
                </a>
              </div>
              <div>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/btn-appgallery.png" alt="AppGallery" className="h-8 sm:h-9 object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Payment Methods / Delivery / Verified */}
      <div className="border-t border-gray-100 mt-2 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row gap-6 sm:gap-10">

          {/* Payment Methods */}
          <div className="min-w-0">
            <p className="text-gray-500 text-xs mb-3">Payment Methods</p>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-7 sm:grid-cols-4 gap-[4px]" style={{ minWidth: "260px", width: "fit-content" }}>
                {[
                  { src: "/pay-lazwallet.png", alt: "Lazada Wallet" },
                  { src: "/pay-visa.png", alt: "VISA" },
                  { src: "/pay-hongleong.png", alt: "Hong Leong" },
                  { src: "/pay-cimb.png", alt: "CIMB" },
                  { src: "/pay-publicbank.png", alt: "Public Bank" },
                  { src: "/pay-rhb.png", alt: "RHB" },
                  { src: "/pay-bankislam.png", alt: "Bank Islam" },
                  { src: "/pay-ambank.png", alt: "AmBank" },
                  { src: "/pay-7eleven.png", alt: "7-Eleven" },
                  { src: "/pay-99speedmart.png", alt: "99 Speedmart" },
                  { src: "/pay-touchngo.png", alt: "Touch n Go" },
                  { src: "/pay-amex.png", alt: "American Express" },
                  { src: "/pay-unionpay.png", alt: "UnionPay" },
                ].map((p) => (
                  <div key={p.alt} className="flex items-center justify-center" style={{ width: "36px", height: "36px" }}>
                    <img src={p.src} alt={p.alt} className="max-h-[30px] max-w-[34px] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Services */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-500 text-xs mb-3">Delivery Services</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <img src="/del-lazlogistics.png" alt="Lazada Logistics" className="h-6 sm:h-8 object-contain" />
                <img src="/del-ninjavan.png" alt="Ninja Van" className="h-6 sm:h-8 object-contain" />
                <img src="/del-skynet.png" alt="SkyNet" className="h-6 sm:h-8 object-contain" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/del-jt-express.png" alt="J&T Express" className="h-6 sm:h-8 object-contain" />
                <img src="/del-jt-cargo.png" alt="J&T Cargo" className="h-6 sm:h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Verified by */}
          <div>
            <p className="text-gray-500 text-xs mb-3">Verified by</p>
            <div className="flex items-center gap-3">
              <img src="/ver-iso27001.png" alt="ISO/IEC 27001" className="h-10 sm:h-14 object-contain" />
              <img src="/ver-pcidss.png" alt="PCI DSS" className="h-10 sm:h-14 object-contain" />
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
