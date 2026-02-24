import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-10!  mt-8 overflow-hidden">
     

     
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="animate-neon-wave w-[200%] h-full"></div>
      </div>
      
     
      <div className="relative z-10 w-full h-full mx-auto">
        <div className="relative backdrop-blur-sm bg-transparent text-center text-white font-light tracking-wide">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ">
            © {currentYear} Tamara. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes neon-wave {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-neon-wave {
          background: linear-gradient(
            90deg,
            #ff00ff 0%,
            #ff00ff 10%,
            #00ffff 20%,
            #00ffff 30%,
            #8b5cf6 40%,
            #8b5cf6 50%,
            #c084fc 60%,
            #c084fc 70%,
            #ff00ff 80%,
            #ff00ff 90%,
            #00ffff 100%
          );
          animation: neon-wave 4s linear infinite;
          filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);
        }
      
      `}</style>
    </footer>
  );
};

export default Footer;