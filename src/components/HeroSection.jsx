import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaLaptop } from "react-icons/fa"; // Mengimpor ikon React

export default function HeroSection() {
  return (
    <section className="relative py-24 w-full h-full flex flex-col items-center px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/img/bg-company.png')",
          backgroundSize: "100% auto",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative mt-10 z-10 flex w-full items-center">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 pr-96 mt-20 px-10 py-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="font-jakarta text-5xl font-bold pr-10 text-white leading-tight">
            Tingkatkan <span className="gradient-text">Bisnismu</span> dengan
            website impian.
          </h1>
          <p className="font-jakarta text-lg pr-48 text-justify text-gray-300 mt-5">
            Kami menawarkan desain modern, fungsionalitas terbaik, dan solusi
            teknologi yang dapat membawa bisnismu ke level selanjutnya. Ayo,
            mulai perjalananmu sekarang!
          </p>
          <div className="flex mt-6">
            <a href="#about">
              <button className="cta group flex items-center px-8 py-3 text-2xl text-white bg-customGreen transition-all duration-1000 transform skew-x-[-15deg] shadow-[6px_6px_0_black] border-none cursor-pointer focus:outline-none hover:shadow-[7px_7px_0_#F8F8FF]">
                <span className="span font-montserrat text-xl transform skew-x-[15deg]">
                  SELENGKAPNYA
                </span>
                <span className="second relative ml-7 top-1/2 translate-y-[-12%] w-5 transition-all duration-500 group-hover:mr-[30px]">
                  <svg
                    width="50px"
                    height="20px"
                    viewBox="0 0 66 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="arrow" fill="none">
                      <path
                        className="one transition-all duration-400 transform translate-x-[-60%]"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="two transition-all duration-500 transform translate-x-[-30%]"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="three transition-all duration-200"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Card Section */}
      <div className="relative z-10 mt-48 w-full font-jakarta text-center flex justify-center gap-8">
        {/* Card 1 */}
        <div className="w-80 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className=" flex items-center justify-center">
            <div className="rounded-full my-5 w-20 h-20 bg-customWhite flex items-center justify-center">
              <img src="/icon/monitoring.png" alt="modern" width={45} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">
            Desain <span className="gradient-text">Modern</span>
          </h2>
          <p className="text-gray-300 my-5">
            Kami membuat website dengan tampilan yang bersih, elegan, dan
            profesional.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-80 bg-white/10 backdrop-blur-md flex flex-col justify-center p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className=" flex items-center justify-center">
            <div className="rounded-full my-5 w-20 h-20 bg-customWhite flex items-center justify-center">
              <img src="/icon/startup.png" alt="fast" width={45} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">
            Kecepatan <span className="gradient-text">Optimal</span>
          </h2>
          <p className="text-gray-300 my-5">
            Website yang cepat dan responsif untuk pengalaman terbaik pengguna.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-80 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center">
            <div className="rounded-full my-5 w-20 h-20 bg-customWhite flex items-center justify-center">
              <img src="/icon/shield.png" alt="secure" width={45} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">
            Keamanan <span className="gradient-text">Data Terjamin</span>
          </h2>
          <p className="text-gray-300 my-5">
            Kami menjaga keamanan data dan memastikan data Anda aman dari ancaman dan kebocoran.
          </p>
        </div>
      </div>
    </section>
  );
}
