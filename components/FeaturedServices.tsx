import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedServices() {
  const services = [
    { id: 1, name: "Power Cable Monitoring" },
    { id: 2, name: "Power Cable Monitoring" },
    { id: 3, name: "Power Cable Monitoring" },
    { id: 4, name: "Power Cable Monitoring" },
    { id: 5, name: "Power Cable Monitoring" },
    { id: 6, name: "Power Cable Monitoring" },
    { id: 7, name: "Power Cable Monitoring" },
    { id: 8, name: "Power Cable Monitoring" },
    { id: 9, name: "Power Cable Monitoring" },
    { id: 10, name: "Power Cable Monitoring" },
  ];

  return (
    <section className="py-8 px-6 md:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="flex items-center gap-2 md:gap-4 p-1 border border-gray-300 rounded-lg bg-white hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Icon/Image Placeholder */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 relative">
              <Image
                src="https://placehold.co/80x80?text=Service"
                alt={service.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
                unoptimized
              />
            </div>

            {/* Service Name */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2">
                {service.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
