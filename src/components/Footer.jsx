import { FaInstagram, FaEnvelope, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="gradient-bg text-white p-6 font-montserrat">
      <div className="container mx-auto my-5 grid md:grid-cols-5 gap-6 text-center md:text-left">
        <div>
          <h1 className="text-3xl font-semibold">FETZ</h1>
          <p className="text-sm mt-5">
            Solusi digital untuk jasa pembuatan website yang cepat, mudah, desain modern dan fiturnya lengkap. Bangun website impianmu sekarang!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Layanan
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="text-lg font-semibold">Layanan</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold">Ikuti Kami</h3>
          <div className="flex space-x-4 justify-center md:justify-start mt-2">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:info@example.com" className="hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              className="hover:text-gray-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@yourusername"
              className="hover:text-gray-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            className="w-48 h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.49249076945!2d106.80603805!3d-6.200000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1634591609847"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p className="text-center mt-4 text-sm">
        &copy; 2025 Barenganaja. All rights reserved.
      </p>
    </footer>
  );
}
