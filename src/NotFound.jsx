
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LightPillar from './LightPillar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1e0a41!' }}>
     
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.5}
          glowAmount={0.003}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={50}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        
        <div className="mb-6" data-aos="zoom-in" data-aos-delay="400">
          <h1 className="text-8xl md:text-9xl font-black">
            <span
              className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#3b82f6] bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundSize: '300% 300%',
                filter: 'drop-shadow(4px 4px 12px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.5))',
              }}
            >
              404
            </span>
          </h1>
        </div>

        
        <h2 className="text-3xl md:text-7xl font-bold mb-3!" data-aos="fade-up" data-aos-delay="600">
          <span
            className="bg-gradient-to-r from-[#c084fc] to-[#60a5fa] bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(3px 3px 10px rgba(0,0,0,0.8)) drop-shadow(0 0 15px rgba(0,0,0,0.4))',
            }}
          >
            Lost in Space
          </span>
        </h2>

      
        <p
          className="text-gray-300 text-lg md:text-xl font-semibold max-w-xl mx-auto mb-2!"
          style={{
            filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))',
          }}
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          The page you're looking for is not here.
        </p>

       
        <button
          onClick={() => navigate('/')}
          className="group relative px-7! py-2! rounded-full bg-transparent border-2 border-[#a55eea] text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_#a55eea]"
          data-aos="fade-up" 
          data-aos-delay="1000"
        >
          <span className="relative z-10">Go Back Home</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#a55eea] to-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default NotFound;