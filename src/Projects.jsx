import travelScape from "../src/assets/travelScape.webp";
import ZenDigital from "../src/assets/zenDigital.jpg"
import ecobuild from "../src/assets/ecobuild.jfif";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const ProjectCard = ({ project }) => {
  const { isActive } = useSwiperSlide();
  const cardRef = useRef(null);
  const tamaraGradient = 'linear-gradient(45deg, #c084fc, #60a5fa)';
  const hiGradient = 'linear-gradient(45deg, #8b5cf6, #3b82f6, #1e3a8a)';

  const handleMove = (clientX, clientY) => {
    if (!isActive) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); 
    const touch = e.touches[0];
    if (touch) {
      handleMove(touch.clientX, touch.clientY);
    }
  };

  const handleEnd = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      style={{ transformStyle: 'preserve-3d' }}
      className={`project-card rounded-xl overflow-hidden transition-all duration-500 w-[250px] h-[320px] md:w-[280px] md:h-[360px] ${
        isActive
          ? 'scale-105 shadow-[0_0_8px_rgba(165,94,234,0.6)] md:shadow-[0_0_15px_rgba(165,94,234,1)] blur-none brightness-100'
          : 'blur-sm brightness-50 scale-90 shadow-lg'
      }`}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-36 md:h-44 object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.style.backgroundColor = '#1e293b';
        }}
      />
      
      <div className="relative p-4 md:p-4 flex flex-col justify-center items-center gap-12 md:gap-16 h-[calc(100%-9rem)] md:h-[calc(100%-11rem)] overflow-hidden bg-transparent backdrop-blur-md">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 1.5 + 0.5;
            return (
              <div
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: `rgba(255, 255, 255, ${0.7 + Math.random() * 0.3})`,
                  boxShadow: '0 0 10px #c084fc, 0 0 20px #8b5cf6',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            );
          })}
        </div>

        <h3
          className="text-xl md:text-2xl font-bold mb-3 text-center relative z-10"
          style={{
            background: tamaraGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px #8b5cf6',
          }}
        >
          {project.name}
        </h3>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 group"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = project.hoverColor;
            e.currentTarget.style.borderColor = 'transparent';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ filter: 'drop-shadow(0 0 5px currentColor)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const originalProjects = [
    {
      id: 1,
      name: 'TravelScape',
      image: travelScape,
      link: '#',
      hoverColor: 'rgba(165, 94, 234, 0.9)',
    },
    {
      id: 2,
      name: 'ZenDigital',
      image: ZenDigital,
      link: 'https://zendigital-fx0r.onrender.com',
      hoverColor: 'rgba(0, 255, 255, 0.8)',
    },
    {
      id: 3,
      name: 'EcoBuild',
      image: ecobuild,
      link: 'https://ecobuild-tnaj.onrender.com',
      hoverColor: 'rgba(139, 92, 246, 0.9)',
    },
  ];

  const projects = [...originalProjects, ...originalProjects, ...originalProjects];

  return (
    <section className="relative text-white overflow-visible shadow-[0_-10px_30px_rgba(165,94,234,0.2)]">
      <div className="max-w-6xl center-container relative mt-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center pt-5!">
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#3b82f6] bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          loop={true}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`${project.id}-${index}`}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="justify-center gap-4 mt-8 md:mt-10 hidden md:flex">
          <div className="swiper-button-prev !static md:!absolute md:left-4 lg:left-10 text-[#a55eea] hover:text-[#00ffff] transition-colors flex"></div>
          <div className="swiper-button-next !static md:!absolute md:right-4 lg:right-10 text-[#a55eea] hover:text-[#00ffff] transition-colors flex"></div>
        </div>
      </div>

      <style>{`
        .swiper {
          padding: 50px 0 70px;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: transparent !important;
          backdrop-filter: none !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
        }
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        /* إصلاح للشاشات الصغيرة جداً (أقل من 356px) */
        @media (max-width: 355px) {
          .project-card {
            border-radius: 0.75rem !important;
          }
          .project-card:not(.scale-105) {
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05) !important;
          }
          .project-card.scale-105 {
            box-shadow: 0 0 8px rgba(165,94,234,0.6) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;