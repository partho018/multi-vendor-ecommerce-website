const products = [
  { id: 1,  image: "/flash-p6.avif",  badge: "LazMall", name: "Metal Case for A6 AirPods, Premium Protective Cover with Carabiner", price: 180,  original: 300, discount: 40, rating: 4.5, reviews: 416  },
  { id: 2,  image: "/flash-p2.webp",  badge: null,       name: "M11 Handheld Bladeless Fan 3000mAh 199 Speed Digital Display", price: 195,  original: 813, discount: 76, rating: 4.8, reviews: 8033 },
  { id: 3,  image: "/flash-p3.avif",  badge: "LazMall", name: "Glad2Glow Perfect Glow Cushion Full Coverage Smooth Skin Finish", price: 260,  original: 578, discount: 55, rating: 4.6, reviews: 476  },
  { id: 4,  image: "/laz-p1.webp",   badge: null,       name: "Gold Plated Bracelet Dewasa Emas GoldLian Tangan Wanita", price: 55,   original: 289, discount: 81, rating: 4.3, reviews: 801  },
  { id: 5,  image: "/laz-p2.avif",   badge: null,       name: "Fashionable T-shirt Short Sleeved Round Neck Top Casual Summer", price: 85,   original: 472, discount: 82, rating: 4.7, reviews: 1334 },
  { id: 6,  image: "/flash-p5.avif", badge: "LazMall", name: "Nivea For Men Deodorant Roll On 50ml Long Lasting Fresh Scent", price: 95,   original: 238, discount: 60, rating: 4.4, reviews: 466  },
  { id: 7,  image: "/flash-p4.webp", badge: null,       name: "A6S TWS Bluetooth 5.0 Earbuds Noise Reduction Magnetic Charging", price: 110,  original: 297, discount: 63, rating: 4.2, reviews: 294  },
  { id: 8,  image: "/cat-1.avif",    badge: null,       name: "LAKUNCI 4-Ply Facial Tissue 6 Packs Wall-Mounted Box 5400 Sheets", price: 75,   original: 278, discount: 73, rating: 4.5, reviews: 423  },
  { id: 9,  image: "/cat-4.avif",    badge: null,       name: "T-shirt Lelaki Round Neck Fashionable Graphic Printed Streetwear", price: 85,   original: 472, discount: 82, rating: 4.6, reviews: 1072 },
  { id: 10, image: "/cat-5.avif",    badge: null,       name: "Premium Mixed Nuts & Fruits 500g/1kg Low Fat Healthy Snack Pack", price: 320,  original: 970, discount: 67, rating: 4.7, reviews: 1623 },
  { id: 11, image: "/cat-6.avif",    badge: null,       name: "TWS Bluetooth Earbuds Sport Waterproof Mic Hi-Fi Stereo Sound", price: 210,  original: 567, discount: 63, rating: 4.4, reviews: 774  },
  { id: 12, image: "/cat-7.avif",    badge: null,       name: "Boos Luca Bossi 50ml Portable Perfume for Men Long Lasting Scent", price: 180,  original: 450, discount: 60, rating: 4.3, reviews: 139  },
  { id: 13, image: "/flash-p1.avif", badge: "LazMall", name: "PRAN Mango Juice Drink 250ml Pack of 6 Fresh Tropical Beverage", price: 180,  original: 240, discount: 25, rating: 4.6, reviews: 512  },
  { id: 14, image: "/laz-p3.avif",   badge: null,       name: "DOBOHT Premium Shower Head Handheld Rain Spray Bathroom Set", price: 245,  original: 580, discount: 58, rating: 4.5, reviews: 389  },
  { id: 15, image: "/laz-p4.avif",   badge: "LazMall", name: "Karcher WD3 Wet & Dry Vacuum Cleaner 1000W 17L Home Workshop", price: 320,  original: 680, discount: 53, rating: 4.8, reviews: 927  },
  { id: 16, image: "/cat-2.avif",    badge: null,       name: "Solar Deck Lights Outdoor Waterproof LED Garden Path Lamp Set", price: 145,  original: 390, discount: 63, rating: 4.4, reviews: 651  },
  { id: 17, image: "/cat-3.avif",    badge: null,       name: "Power Bank 20000mAh Fast Charge Portable Dual USB LED Display", price: 190,  original: 480, discount: 60, rating: 4.6, reviews: 2103 },
  { id: 18, image: "/cat-8.avif",    badge: null,       name: "iPad Apple Tablet 10th Gen 10.9 inch Wi-Fi 64GB Silver Official", price: 1200, original: 2100,discount: 43, rating: 4.9, reviews: 344  },
  { id: 19, image: "/cat-9.avif",    badge: null,       name: "Women Smartwatch Fitness Tracker Heart Rate Blood Oxygen Monitor", price: 195,  original: 550, discount: 65, rating: 4.3, reviews: 891  },
  { id: 20, image: "/cat-10.avif",   badge: "LazMall", name: "LIMITED GROUPBUY A6S Pro TWS Earbuds with Charging Case Wireless", price: 99,   original: 250, discount: 60, rating: 4.5, reviews: 1204 },
  { id: 21, image: "/cat-11.avif",   badge: null,       name: "Kitchen Cabinet Organizer Sideboard Dining Room Storage Modern", price: 980,  original: 2100,discount: 53, rating: 4.7, reviews: 278  },
  { id: 22, image: "/cat-12.webp",   badge: null,       name: "Christmas Party Decoration Set Ornament Baubles Lights Garland", price: 120,  original: 320, discount: 63, rating: 4.2, reviews: 519  },
  { id: 23, image: "/cat-13.avif",   badge: null,       name: "Home Office Standing Desk Height Adjustable Ergonomic Workstation", price: 750, original: 1800,discount: 58, rating: 4.6, reviews: 342  },
  { id: 24, image: "/cat-14.avif",   badge: null,       name: "Handheld Stick Vacuum Cleaner Cordless 22000Pa Strong Suction", price: 280,  original: 680, discount: 59, rating: 4.5, reviews: 1487 },
  { id: 25, image: "/cat-15.avif",   badge: "LazMall", name: "Women Dresses Casual Long Sleeve Floral Print Flowy Midi Dress", price: 95,   original: 290, discount: 67, rating: 4.4, reviews: 736  },
  { id: 26, image: "/flash-p2.webp", badge: null,       name: "ACI Pure Mustard Oil 1 Litre Premium Quality Cold Pressed Extra", price: 195,  original: 250, discount: 22, rating: 4.3, reviews: 628  },
  { id: 27, image: "/laz-p5.avif",   badge: null,       name: "Popo Instant Noodle Snack Korean Style Spicy Flavour Pack of 10", price: 65,   original: 180, discount: 64, rating: 4.1, reviews: 303  },
  { id: 28, image: "/laz-p6.webp",   badge: "LazMall", name: "SweetDream Memory Foam Bolster Pillow Cooling Gel Comfort Sleep", price: 95,   original: 220, discount: 57, rating: 4.7, reviews: 458  },
  { id: 29, image: "/flash-p3.avif", badge: null,       name: "Bashundhara Soft Facial Tissue 150 Pulls 2 Ply Pack of 3 Boxes", price: 85,   original: 110, discount: 23, rating: 4.5, reviews: 892  },
  { id: 30, image: "/flash-p4.webp", badge: null,       name: "Meril Splash Moisturizing Toilet Soap 100g Pack of 4 Refreshing", price: 55,   original: 70,  discount: 21, rating: 4.2, reviews: 567  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-3 h-3" viewBox="0 0 20 20" fill={star <= Math.floor(rating) ? "#f57224" : star - 0.5 <= rating ? "url(#half)" : "#d1d5db"}>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#f57224" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function JustForYou() {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-bold text-gray-900 mb-2 px-1">Just For You</h2>

      <div className="grid grid-cols-6 gap-[5px]">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white cursor-pointer hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full bg-white overflow-hidden" style={{ paddingTop: "100%" }}>
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-contain p-2"
              />
              {p.badge && (
                <div className="absolute top-2 left-2 bg-[#F05024] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm">
                  LazMall
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-2 flex flex-col gap-1 flex-1">
              <p className="text-xs text-gray-700 line-clamp-2 leading-tight">{p.name}</p>

              {/* Price row */}
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-sm font-bold text-[#f57224]">৳{p.price}</span>
                <span className="text-[10px] text-gray-400 line-through">৳{p.original}</span>
                <span className="text-[10px] text-gray-500">-{p.discount}%</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <StarRating rating={p.rating} />
                <span className="text-[10px] text-gray-400">({p.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More button */}
      <div className="bg-white mt-[5px] pt-6 pb-4 flex items-center justify-center">
        <button className="border border-[#3dbdb7] text-[#3dbdb7] text-sm font-medium tracking-widest px-16 py-3 hover:bg-[#3dbdb7] hover:text-white transition-colors duration-200">
          LOAD MORE
        </button>
      </div>

      {/* Promo Banners */}
      <div className="flex gap-[5px] mt-[5px]">
        <div className="flex-1 overflow-hidden cursor-pointer">
          <img src="/promo-1.png" alt="Lazada Collection Point" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 overflow-hidden cursor-pointer">
          <img src="/promo-2.png" alt="Lazada Gift Card" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 overflow-hidden cursor-pointer">
          <img src="/promo-3.png" alt="Lazada Affiliate Program" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
