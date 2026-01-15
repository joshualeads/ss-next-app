import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="bg-gray-100 rounded-lg mx-6 md:mx-0 px-6 md:px-8 py-8 md:py-4 my-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center text-center md:text-left">
        {/* Left Content */}
        <div className="md:flex-1">
          <h2 className="text-2xl md:text-base font-bold text-gray-900 mb-3">Contact us</h2>
          <p className="text-base md:text-sm text-gray-900 mb-6 md:mb-0">
            Submit your inquiry and we will contact you
          </p>
        </div>

        {/* Right Button */}
        <Link
          href="/contact"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 md:px-8 rounded-lg transition-colors w-full md:w-auto"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
