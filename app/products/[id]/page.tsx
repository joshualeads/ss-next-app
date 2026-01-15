import ProductGallery from "@/components/ProductGallery";
import Downloads from "@/components/Downloads";
import Product from "@/components/Product";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productImages = [
    "https://placehold.co/800x800?text=Product+Image+1",
    "https://placehold.co/800x800?text=Product+Image+2",
    "https://placehold.co/800x800?text=Product+Image+3",
    "https://placehold.co/800x800?text=Product+Image+4",
    "https://placehold.co/800x800?text=Product+Image+5",
    "https://placehold.co/800x800?text=Product+Image+6",
  ];

  const products = [
    {
      id: 1,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
    },
    {
      id: 2,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
    },
    {
      id: 3,
      title: "Linear / distributed acoustic sensor (DAS)",
      description: "Detection and identification of acoustic signals UTS-AS1000",
    }
  ];

  const downloads = [
    {
      id: 1,
      title: "Brochure: Railway Monitoring",
      fileType: "PDF",
      fileSize: "5.3 MB",
    },
    {
      id: 2,
      title: "Brochure: Railway Monitoring (PT)",
      fileType: "PDF",
      fileSize: "1.3 MB",
    },
    {
      id: 3,
      title: "Flyer: Rail Monitoring",
      fileType: "PDF",
      fileSize: "1.2 MB",
    },
    {
      id: 4,
      title: "Flyer: Track Condition Monitoring - Below Ballast Scan (BBS)",
      fileType: "PDF",
      fileSize: "1.0 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Content */}
      <main className="w-12/12 mx-auto py-12 md:py-4">
        {/* Section Banner */}
        <div className="rounded-md mx-6 md:mx-auto md:w-12/12 my-6 py-12 px-0 text-center" style={{ backgroundColor: '#535253' }}>
          <div className="w-full">
            <h1 className="text-white text-2xl md:text-2xl font-bold mb-2">
              Railway Road vehicle and track monitoring
            </h1>
            <p className="text-white text-lg md:text-lg font-semibold">
              Detection and identification of acoustic signals UTS-AS1000
            </p>
          </div>
        </div>

        {/* Product Section Grid */}
        <div className="mx-6 md:mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Product Gallery - Left on Desktop, Top on Mobile */}
            <ProductGallery images={productImages} />

            {/* Product Info - Right on Desktop, Bottom on Mobile */}
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl md:text-xl font-bold text-gray-900 mb-6 leading-tight">
                Intelligent traffic management and monitoring of road and vehicle conditions
              </h2>

              <p className="text-gray-700 text-base md:text-md mb-8 leading-relaxed">
                Ensuring safety from fires in transportation infrastructure is essential, as effective fire detection in areas like road/rail/metro tunnels or parking garages prevents disasters and protects lives. Fires in these confined spaces can escalate quickly, with severe consequences and high reconstruction costs. In such critical environments, time is crucial, making fast and reliable monitoring indispensable. AP Sensing's fiber optic Linear Heat Detection (LHD) technology offers a reliable monitoring solution, even under harshest conditions assets.
              </p>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <Downloads downloads={downloads} />

        {/* Associated Equipment Section */}
        <div className="mx-6 md:mx-auto md:w-12/12 my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Associated Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
