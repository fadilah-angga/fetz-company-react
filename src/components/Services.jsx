import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Membangun website yang menarik, mudah digunakan, dan siap membantu bisnismu berkembang!",
      image: "/img/vector-2.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Mendesain antarmuka pengguna yang nyaman dan menarik agar pengguna betah dan mudah memahami aplikasi atau websitemu!",
      image: "/img/vector-3.png",
    },
  ];

  return (
    <section id="services" className="py-16 relative">
      <div className="container mx-auto text-center relative">
        {/* Judul */}
        <motion.h2
          className="font-montserrat text-customBlack font-semibold text-3xl mb-12 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Layanan <span className="gradient-text">Kami</span>
        </motion.h2>

        {/* Gambar Background di Bawah Kiri */}
        <img
          src="/img/circle-bg.png"
          alt="bg"
          className="absolute bottom-0 left-0 transform -translate-x-2/4 translate-y-1/3 z-0 w-[650px] opacity-50"
        />

        {/* Card Layanan */}
        <div className="flex flex-wrap justify-center gap-14 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white cursor-pointer shadow-lg rounded-2xl p-6 shadow-slate-200 hover:shadow-slate-300 hover:shadow-2xl transition-shadow flex flex-col items-center text-center w-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <img src={service.image} alt={service.title} className="w-52 mb-4" />
              <h3 className="text-xl font-montserrat font-semibold gradient-text mb-2">
                {service.title}
              </h3>
              <p className="text-customBlack font-montserrat text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
