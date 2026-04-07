import { Link } from "wouter";

const categories = [
  { id: 1,  name: "Mobiles",                      image: "/cat-1.avif",  shopCategory: "Electronics" },
  { id: 2,  name: "Women's Dresses",               image: "/cat-2.avif",  shopCategory: "Fashion" },
  { id: 3,  name: "Power Banks",                   image: "/cat-3.avif",  shopCategory: "Electronics" },
  { id: 4,  name: "Blouses & Shirts",              image: "/cat-4.avif",  shopCategory: "Fashion" },
  { id: 5,  name: "Kitchen Organizers",            image: "/cat-5.avif",  shopCategory: "Home & Kitchen" },
  { id: 6,  name: "Phone Cables & Converters",     image: "/cat-6.avif",  shopCategory: "Electronics" },
  { id: 7,  name: "Wireless Earbuds",              image: "/cat-7.avif",  shopCategory: "Electronics" },
  { id: 8,  name: "Tablets",                       image: "/cat-8.avif",  shopCategory: "Electronics" },
  { id: 9,  name: "Women's Pants & Leggings",      image: "/cat-9.avif",  shopCategory: "Fashion" },
  { id: 10, name: "Bed Sheets",                    image: "/cat-10.avif", shopCategory: "Home & Kitchen" },
  { id: 11, name: "Dried Fruit, Nuts & Seeds",     image: "/cat-11.avif", shopCategory: "Food & Beverages" },
  { id: 12, name: "Christmas Decoration…",         image: "/cat-12.webp", shopCategory: "Home & Kitchen" },
  { id: 13, name: "Home Office Desks",             image: "/cat-13.avif", shopCategory: "Home & Kitchen" },
  { id: 14, name: "Stick Vacuum Cleaners",         image: "/cat-14.avif", shopCategory: "Home & Kitchen" },
  { id: 15, name: "Outdoor Lighting",              image: "/cat-15.avif", shopCategory: "Home & Kitchen" },
  { id: 16, name: "Smartwatch & Fitness Trackers", image: "/cat-1.avif",  shopCategory: "Electronics" },
];

export default function CategoriesSection() {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-bold text-gray-900 mb-2 px-1">Categories</h2>

      <div className="bg-white px-3 sm:px-5 py-4" style={{ borderRadius: "5px" }}>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${encodeURIComponent(cat.shopCategory)}`}
              className="cursor-pointer group flex flex-col items-center border border-gray-200 hover:border-[#f57224] hover:shadow-sm transition-all duration-200"
            >
              <div className="w-full bg-white overflow-hidden flex items-center justify-center" style={{ height: "80px" }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                  style={{ width: "64px", height: "64px" }}
                />
              </div>
              <div className="w-full py-1.5 px-1">
                <p className="text-[10px] sm:text-xs text-center text-gray-700 group-hover:text-[#f57224] leading-tight line-clamp-2 transition-colors">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
