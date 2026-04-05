const features = [
  {
    titleImg: "/title-topup.avif",
    title: "LazMall",
    desc: "100% Authentic Brands",
    img: "/feature-lazmall.avif",
    imgBg: false,
  },
  {
    titleImg: "/title-shipping.avif",
    title: "Free Shipping",
    desc: "Free & Fast Delivery",
    img: "/feature-shipping.avif",
    imgBg: true,
    bgColor: "#e0f7f4",
  },
  {
    titleImg: "/title-lazmall.avif",
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
          className="bg-white rounded-sm border border-gray-200 flex items-center justify-between px-6 py-4 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <img
              src={f.titleImg}
              alt={f.title}
              className="h-[28px] w-auto object-contain object-left mb-0.5"
            />
            <span className="text-xs text-gray-500">{f.desc}</span>
          </div>
          <div
            className="flex-shrink-0 w-1/2 h-[150px] flex items-center justify-center rounded-2xl overflow-hidden"
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
