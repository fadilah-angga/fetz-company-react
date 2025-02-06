import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section id="about" className="py-14">
      <div className="container bg-white py-10 px-10 shadow-lg shadow-slate-200 rounded-3xl mx-auto flex items-center justify-between relative">
        {/* Title with animation */}
        <motion.h2
          className="font-montserrat font-semibold text-customBlack absolute top-0 py-10 left-1/4 transform -translate-x-24 text-3xl mt-5"
          initial={{ opacity: 0 }} // Mulai dari opacity 0
          whileInView={{ opacity: 1 }} // Menampilkan saat elemen terlihat
          viewport={{ once: true }} // Animasi hanya dijalankan sekali
          transition={{ duration: 1.5, ease: "easeInOut" }} // Durasi animasi
        >
          Functional Ecosystem and Tech Zone{" "}
          <span className="gradient-text">(FETZ)</span>
        </motion.h2>

        {/* Kolom Kiri - Gambar */}
        <motion.div
          className="flex-1 ml-5 mt-24 mb-5"
          initial={{ x: -50, opacity: 0 }} // Mulai dari posisi kiri dan opacity 0
          whileInView={{ x: 0, opacity: 1 }} // Gerakkan ke posisi semula saat elemen masuk viewport
          viewport={{ once: true }} // Animasi hanya dijalankan sekali
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src="/img/vector-1.png" alt="About Us" width={300} />
        </motion.div>

        {/* Kolom Kanan - Teks */}
        <motion.div
          className="flex-1 mr-10 mt-7"
          initial={{ x: 50, opacity: 0 }} // Mulai dari posisi kanan dan opacity 0
          whileInView={{ x: 0, opacity: 1 }} // Gerakkan ke posisi semula saat elemen masuk viewport
          viewport={{ once: true }} // Animasi hanya dijalankan sekali
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p className="text-customBlack font-montserrat text-justify mt-10">
            <span className="gradient-text font-semibold">FETZ</span> solusi
            digital yang siap membantu bisnis Anda memiliki website yang modern
            dan efektif. Kami menawarkan desain yang menarik, fitur yang
            optimal, dan teknologi terbaru untuk meningkatkan visibilitas dan
            kepercayaan terhadap brand Anda secara online.
          </p>
          <div className="flex justify-end mt-14">
            <a href="#services">
              <button className="gradient-button font-montserrat font-semibold">
                Lihat Layanan Kami
                <FaArrowRight className="text-customWhite" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
