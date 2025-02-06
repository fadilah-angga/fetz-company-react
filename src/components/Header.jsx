import React, { useState, useEffect } from "react";
import { FaRocket } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showRocketButton, setShowRocketButton] = useState(false); // Menyimpan state untuk tombol roket
  const [rocketClicked, setRocketClicked] = useState(false); // Menyimpan state untuk apakah tombol roket sudah diklik

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
      if (window.scrollY > 200) {
        setShowRocketButton(true);
      }
    } else {
      setScrolled(false);
      setShowRocketButton(false);
    }
  };

  const handleRocketClick = () => {
    // Scroll ke atas ketika tombol diklik
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRocketClicked(true);

    // Menghentikan animasi api setelah beberapa detik
    setTimeout(() => {
      setRocketClicked(false);
    }, 1000); // Animasi api bertahan 1 detik
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          scrolled ? "shadow-md bg-black/40 backdrop-blur-md" : "bg-transparent"
        } text-customWhite p-4 fixed w-full top-0 left-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-montserrat text-2xl font-bold italic">F<span className="text-customGreen">E</span>TZ</h1>
          <nav>
            <ul className="flex gap-10">
              <li><a href="#" className="font-jakarta pb-2 gradient-underline">Home</a></li>
              <li><a href="#about" className="font-jakarta pb-2 gradient-underline">Tentang Kami</a></li>
              <li><a href="#services" className="font-jakarta pb-2 gradient-underline">Layanan</a></li>
              <li><a href="#contact" className="font-jakarta pb-2 gradient-underline">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Tombol Rocket */}
      {showRocketButton && (
        <button
          onClick={handleRocketClick}
          className="fixed bottom-4 gradient-bg right-4 bg-customGreen z-20 text-white rounded-full p-4 shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          <FaRocket size={24} className="-rotate-45" />
          {rocketClicked && (
            <div className="rocket-fire absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-fire"></div>
          )}
        </button>
      )}

      {/* Animasi Api */}
      <style jsx>{`
        .rocket-fire {
          animation: fire 0.1s ease-out infinite;
        }

        @keyframes fire {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
            width: 10px;
            height: 10px;
            background-color: red;
          }
          50% {
            transform: translateX(-50%) translateY(10px);
            width: 15px;
            height: 15px;
            opacity: 0.7;
            background-color: orange;
          }
          100% {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
            width: 20px;
            height: 20px;
            background-color: yellow;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
