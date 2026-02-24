import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import UI from "../src/assets/UI.jpeg";
import Web from "../src/assets/WEB.jpeg";
import Mobile from "../src/assets/MOBILE.jpeg";
import SEO from "../src/assets/Seo.jpeg";


const About = () => {
  const roles = [
    { title: 'Web Development', image: Web },
    { title: 'UI/UX', image:UI  },
    { title: 'Mobile Development', image:Mobile  },
    { title: 'SEO & Performance', image:SEO  },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const sectionRef = useRef(null);

  
  const paragraphLines = [
    "I'm a Front-end developer based in Syria.",
    "Currently pursuing my degree in Computer Information Engineering at Damascus University,",
    "I've learned to think logically, solve problems efficiently, and pay attention to every pixel.",
    "I specialize in building fast, accessible, and visually stunning websites using React, Tailwind, and modern tools.",
    "My design background helps me bridge the gap between code and creativity,",
    "ensuring every project I touch is both functional and beautiful.",
    "Whether it's a developer portfolio, a startup landing page, or a brand identity,",
    "I pour my heart into making it stand out."
  ];

  useEffect(() => {
    const currentRole = roles[index].title;
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 150);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, roles]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            const timers = [];
            for (let i = 0; i < paragraphLines.length; i++) {
              const timer = setTimeout(() => {
                setVisibleLines(i + 1);
              }, i * 400); 
              timers.push(timer);
            }
           
            observer.unobserve(entry.target);
          } else {
            
            setVisibleLines(0);
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const gradientHi = 'linear-gradient(45deg, #8b5cf6, #3b82f6, #1e3a8a)';
  const gradientTamara = 'linear-gradient(45deg, #c084fc, #60a5fa)';
  const shadowHi = '0 0 30px #8b5cf6';

  return (
    <section
      ref={sectionRef}
      className="relative text-white min-h-screen flex flex-col justify-center overflow-hidden "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="absolute top-20 left-10 w-16 h-16 border border-white/5 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/5 rounded-full"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/5 rounded-md rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 center-container grid md:grid-cols-2 gap-12 items-center justify-center px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-left pt-5! md:pt-0" style={{ position: 'relative' }}>
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#3b82f6] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="text-md leading-relaxed space-y-2 text-white pb-8!">
            {paragraphLines.map((line, i) => (
              <p
                key={i}
                className={`transition-all duration-700 ${
                  i < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-[30px]">
          <div className="w-70 h-70 rounded-lg overflow-hidden border-4 border-[#a55eea] shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_30px_#b300ff] transition-shadow duration-300">
            <img
              src={roles[index].image}
              alt={roles[index].title}
              className="w-full h-full object-fit"
            />
          </div>
          <div className="text-2xl md:text-3xl font-mono text-center px-4 pb-3!">
            <span
              style={{
                background: gradientTamara,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: shadowHi,
              }}
            >
              {displayText}
            </span>
            <span className="animate-pulse ml-1 text-[#c084fc]">|</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;