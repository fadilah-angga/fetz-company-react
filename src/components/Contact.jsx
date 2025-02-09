import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mt-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Judul di Tengah Atas */}
        <motion.h2
          className="font-jakarta font-bold text-customBlack text-center text-3xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Hubungi <span className="text-customGreen">Kami</span>
        </motion.h2>

        {/* Grid Konten */}
        <div className="grid grid-cols-2 items-center gap-10">
          {/* Kolom Kiri - Gambar */}
          <motion.div
            className="flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Tombol Media Sosial */}
            <div className="flex flex-row gap-4">
              {[
                { href: "https://instagram.com", img: "instagram.png" },
                { href: "mailto:example@email.com", img: "mail.png" },
                { href: "https://wa.me/yourphonenumber", img: "whatsapp.png" },
                { href: "https://tiktok.com/@yourusername", img: "tik-tok.png" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.1 * (index + 1) }}
                >
                  <button className="cta group flex items-center px-5 py-4 text-2xl text-white bg-customWhite hover:bg-customGreen transition-all duration-1000 transform skew-x-[-15deg] shadow-[6px_6px_0_#16C79A] hover:shadow-[6px_6px_0_black] border-none cursor-pointer focus:outline-none">
                    <img
                      src={`/icon/${item.img}`}
                      alt="Icon"
                      className="w-8 h-8 opacity-45 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </button>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
