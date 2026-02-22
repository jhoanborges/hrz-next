import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hrz-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/img/logo-trans.png"
                alt="HRZ Logistics"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              We approach warehouse design as a science which needs an in-depth
              knowledge of the entire supply chain to implement successfully.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Warehousing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Distribution</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Logistics</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Trucking</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Packaging</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                Av. industrial libramiento 111<br />
                Parque Industrial libramiento<br />
                General Escobedo,<br />
                Nuevo León, México
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+528112853039" className="hover:text-white transition-colors">
                  +52 81 1285 3039
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@hrzlogistics.mx?subject=Services Information&body=I saw your web page."
                  className="hover:text-white transition-colors"
                >
                  info@hrzlogistics.mx
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
