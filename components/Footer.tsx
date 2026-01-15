import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Footer Content Container */}
      <div className="w-11/12 md:w-11/12 mx-auto py-12 border-t border-gray-200">
        {/* Top Section - About */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Senowell Systems
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
            Senowell Labs is an engineering firm with in-house technology able
            to implement any fiber-optic monitoring solution in your asset. We
            support our customers every step of the project.
          </p>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center text-center md:text-left pt-4">
          {/* Copyright */}
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            Copyright © 2026 Senowell Systems. All rights reserved
          </p>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-center md:items-center text-sm">
            <Link href="/terms" className="text-gray-700 hover:text-gray-900">
              Teams & Conditions
            </Link>
            <span className="text-gray-700 hidden md:inline">|</span>
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </Link>
            <span className="text-gray-700 hidden md:inline">|</span>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
