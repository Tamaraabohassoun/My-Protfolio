import React from 'react';
import { FiPenTool, FiCode, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import UI from "../src/assets/UI.jpeg";
import Web from "../src/assets/WEB.jpeg";
import Mobile from "../src/assets/MOBILE.jpeg";
import SEO from "../src/assets/Seo.jpeg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description:
        'Crafting intuitive and visually appealing user experiences that captivate and engage.',
      icon: <FiPenTool />,
      image: UI,
      hoverColor: 'rgba(165, 94, 234, 0.9)',
      gradient: 'from-[#c084fc] to-[#60a5fa]',
    },
    {
      id: 2,
      title: 'Web Development',
      description:
        'Building fast, responsive, and modern websites using React, Tailwind, and cutting-edge tech.',
      icon: <FiCode />,
      image: Web,
      hoverColor: 'rgba(0, 255, 255, 0.8)',
      gradient: 'from-[#8b5cf6] to-[#3b82f6]',
    },
    {
      id: 3,
      title: 'Mobile Development',
      description:
        'Creating seamless mobile experiences for iOS and Android with smooth performance.',
      icon: <FiSmartphone />,
      image: Mobile,
      hoverColor: 'rgba(139, 92, 246, 0.9)',
      gradient: 'from-[#a55eea] to-[#00ffff]',
    },
    {
      id: 4,
      title: 'SEO & Performance',
      description:
        'Optimizing websites to rank higher, load faster, and reach the right audience.',
      icon: <FiTrendingUp />,
      image: SEO,
      hoverColor: 'rgba(192, 132, 252, 0.9)',
      gradient: 'from-[#c084fc] to-[#3b82f6]',
    },
  ];

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        boxShadow:
          'inset 0 10px 20px -10px rgba(165,94,234,0.3), inset 0 -10px 20px -10px rgba(165,94,234,0.3)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full bg-[#a55eea]/5 blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#3b82f6]/5 blur-3xl animate-pulse bottom-0 right-0"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(200, 150, 255, ${0.3 + Math.random() * 0.5})`,
              boxShadow: '0 0 10px #c084fc',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="center-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center pt-5! pb-8!">
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#3b82f6] bg-clip-text text-transparent">
            My Services
          </span>
        </h2>

        {/* الأعمدة المتجاوبة: 
            - افتراضي: عمود واحد 
            - من 320px: عمودين 
            - من 640px: عمودين 
            - من 768px: 3 أعمدة 
            - من 1024px: 4 أعمدة 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10! justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 border border-white/10 hover:border-[#a55eea] w-full max-w-[320px] lg:max-w-[280px]"
              style={{ height: '380px' }} // تم تقليل الارتفاع قليلاً ليتناسب مع الشاشات الصغيرة جداً
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter brightness-50 blur-[1px] group-hover:brightness-75"
              />

              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to top, ${service.hoverColor}, transparent)`,
                }}
              ></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-5 text-center z-10">
                <div
                  className="text-3xl md:text-4xl mb-3 md:mb-6 text-[#e0c8ff]"
                  style={{
                    filter: `drop-shadow(0 0 12px ${service.hoverColor.replace('0.9', '0.7')}) drop-shadow(0 0 24px ${service.hoverColor.replace('0.9', '0.4')})`,
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className={`text-lg md:text-2xl font-bold mb-1 md:mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 leading-relaxed max-w-xs px-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;