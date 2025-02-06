import { FaInstagram, FaEnvelope, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Judul di Tengah Atas */}
        <motion.h2
          className="font-montserrat font-semibold text-customBlack text-center text-3xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Hubungi <span className="gradient-text">Kami</span>
        </motion.h2>

        {/* Grid Konten */}
        <div className="grid grid-cols-2 items-center gap-10">
          {/* Kolom Kiri - Gambar */}
          <motion.div
            className="flex justify-center"
            initial={{ x: -100, opacity: 0 }} // Mulai dari kiri
            whileInView={{ x: 0, opacity: 1 }} // Muncul ke posisi semula
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src="/img/vector-4.png"
              alt="Background"
              className="w-[400px] md:w-[500px] object-contain"
            />
          </motion.div>

          {/* Kolom Kanan - Tombol Media Sosial */}
          <motion.div
            className="flex flex-row justify-center gap-6"
            initial={{ y: 10, opacity: 0 }} // Mulai dari kanan
            whileInView={{ y: 0, opacity: 1 }} // Muncul ke posisi semula
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Tombol Media Sosial dengan animasi */}
            <div className="flex flex-row gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
              >
                <FaInstagram size={24} />
              </motion.a>

              <motion.a
                href="mailto:example@email.com"
                className="bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              >
                <FaEnvelope size={24} />
              </motion.a>

              <motion.a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              >
                <FaWhatsapp size={24} />
              </motion.a>

              <motion.a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <FaTiktok size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
