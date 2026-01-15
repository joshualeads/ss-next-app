import Image from "next/image";
import FeaturedServices from "@/components/FeaturedServices";
import FeaturedProducts from "@/components/FeaturedProducts";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <FeaturedServices />
      <FeaturedProducts />
    </div>
  );
}
