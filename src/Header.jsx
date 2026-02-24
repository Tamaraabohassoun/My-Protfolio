import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
     
      <header className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX
              size={24}
              style={{
                filter: "drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #c084fc)",
              }}
            />
          ) : (
            <FiMenu
              size={24}
              style={{
                filter: "drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #c084fc)",
              }}
            />
          )}
        </button>

       
        {isOpen && (
          <div
            className="absolute top-full right-0 mt-2 w-48 
                       bg-[#1e0a41] backdrop-blur-md border border-white/10 
                       rounded-2xl p-4 shadow-2xl animate-fadeIn"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg font-medium py-2 px-4 rounded-lg 
                             hover:bg-white/10 transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                    e.target.style.color = "#c084fc";
                    e.target.style.textShadow = "0 0 15px #c084fc";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                    e.target.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      
      <header
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
                   hidden md:flex 
                   p-3!                       
                   backdrop-blur-md bg-black/20 
                   border-b border-white/10 
                   shadow-xl rounded-full 
                   items-center justify-center
                   transition-all duration-300"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <nav className="flex gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-white uppercase tracking-wide transition-all duration-300 
                         border-b-2 border-transparent hover:border-[#c084fc] hover:text-[#c084fc]"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0 0 15px #c084fc";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}