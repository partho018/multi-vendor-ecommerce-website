const features = [
  {
    title: "LazMall",
    desc: "100% Authentic Brands",
    img: "/feature-lazmall.avif",
    imgBg: false,
  },
  {
    title: "Free Shipping",
    desc: "Free & Fast Delivery",
    img: "/feature-shipping.avif",
    imgBg: true,
    bgColor: "#e0f7f4",
  },
  {
    title: "Top Up",
    desc: "Top Up, Bill, Coupon & eStore",
    img: "/feature-topup.avif",
    imgBg: true,
    bgColor: "#e8eeff",
  },
];

export default function FeatureRow() {
  return (
    <div className="grid grid-cols-3 gap-2 mb-2">
      {features.map((f, i) => (
        <a
          key={i}
          href="#"
          className="bg-white rounded-sm border border-gray-200 flex items-center justify-between px-4 py-3 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">{f.title}</span>
            <span className="text-xs text-gray-500 mt-0.5">{f.desc}</span>
          </div>
          <div
            className="flex-shrink-0 w-[72px] h-[56px] flex items-center justify-center rounded-2xl overflow-hidden"
            style={f.imgBg ? { backgroundColor: f.bgColor } : {}}
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-full h-full object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
