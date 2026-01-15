import Product from "./Product";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+1",
    },
    {
      id: 2,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+2",
    },
    {
      id: 3,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+3",
    },
    {
      id: 4,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+4",
    },
    {
      id: 5,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+5",
    },
    {
      id: 6,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+6",
    },
    {
      id: 7,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+7",
    },
    {
      id: 8,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=Product+8",
    },
  ];

  return (
    <section className="py-8 px-6 md:px-0">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-4 lg:mb-6">Products</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
