export default function TopNav() {
  const links = [
    { label: "FEEDBACK", highlight: true },
    { label: "SAVE MORE ON APP" },
    { label: "SELL ON LAZADA" },
    { label: "CUSTOMER CARE" },
    { label: "TRACK MY ORDER" },
  ];

  const authLinks = ["LOGIN", "SIGNUP", "TUKAR BAHASA"];

  return (
    <div className="bg-white border-b border-gray-200 text-xs text-gray-600">
      <div className="max-w-[1200px] mx-auto px-2 flex items-center justify-between h-8">
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`hover:text-gray-900 transition-colors hidden sm:inline ${
                link.highlight ? "text-[#f57224] font-semibold !inline" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {authLinks.map((link) => (
            <a key={link} href="#" className="hover:text-gray-900 transition-colors hidden sm:inline last:inline">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
