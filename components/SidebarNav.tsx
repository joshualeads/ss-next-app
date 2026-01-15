export default function SidebarNav() {
  const categories = [
    {
      title: "Energy",
      items: ["Power Cable Monitoring"],
    },
    {
      title: "Civil & Mining Infrastructure",
      items: [
        "Structural Health",
        "Fire Detection",
        "Leak Detection",
        "Geo Technical Monitoring",
      ],
    },
    {
      title: "Water, Oil & Gas",
      items: ["Duct Super Vision"],
    },
    {
      title: "Geo Technical",
      items: ["LNG plant Supervision"],
    },
    {
      title: "Security",
      items: ["Rail Road"],
    },
  ];

  return (
    <aside className="w-full md:w-48 bg-white px-6 md:px-0 py-6 md:border-r border-gray-200 md:mr-6">
      <nav className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-1">
            {/* Category Title */}
            <h3 className="text-base font-bold text-gray-900">
              {category.title}
            </h3>

            {/* Subcategories */}
            <ul className="space-y-0">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
