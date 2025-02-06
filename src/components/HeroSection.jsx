import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-24 w-full px-20 flex items-center">
      <motion.div
        className="flex-1 px-10 py-5"
        initial={{ x: -100, opacity: 0 }} // Mulai dari kiri dengan opacity 0
        animate={{ x: 0, opacity: 1 }} // Gerakkan ke posisi semula dan buat opacity menjadi 1
        transition={{ duration: 1, ease: "easeInOut" }} // Durasi animasi
      >
        <h1 className="font-montserrat text-4xl font-semibold mt-5">
          Tingkatkan <span className="gradient-text">Bisnismu</span> dengan
          website impian.
        </h1>
        <p className="font-montserrat text-lg text-customBlack my-5">
          Kami menawarkan desain modern, fungsionalitas terbaik, dan solusi
          teknologi yang dapat membawa bisnismu ke level selanjutnya. Ayo, mulai
          perjalananmu sekarang!
        </p>
        <div className="flex">
        <a href="#about">
          <button className="gradient-button font-montserrat font-semibold">
            Selengkapnya
            <FaArrowRight className="text-customWhite" />
          </button>
        </a>
        </div>
      </motion.div>
      <div className="flex-1 ml-10 relative">
        <img
          src="/img/circle-bg.png"
          alt="bg"
          className="absolute top-[-50px] left-[50px] z-0 "
          width={500}
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src="/img/hero.png"
            alt="Company"
            className="rounded-lg z-10"
            width={550}
            initial={{
              rotate: 45,
            }}
            animate={{
              y: [0, -10, 0], // Bergerak naik (-10px) dan kembali ke posisi semula (0px)
            }}
            transition={{
              duration: 2, // Durasi per gerakan naik-turun
              repeat: Infinity, // Ulangi animasi naik-turun
              repeatType: "loop", // Menentukan animasi berulang
              ease: "easeInOut", // Transisi halus
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
