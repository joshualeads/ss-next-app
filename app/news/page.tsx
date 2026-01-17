import Product from "@/components/Product";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+1",
    },
    {
      id: 2,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+2",
    },
    {
      id: 3,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+3",
    },
    {
      id: 4,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+4",
    },
    {
      id: 5,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+5",
    },
    {
      id: 6,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
      image: "https://placehold.co/400x400?text=News+6",
    },
  ];

  return (
    <div className="w-full py-6">
      {/* News Header */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-6 md:px-0 mb-8 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          News
        </h1>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
