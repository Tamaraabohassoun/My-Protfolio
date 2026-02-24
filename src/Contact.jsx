import React, { useState, useEffect, useRef } from 'react';
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [displayText, setDisplayText] = useState('');
  const [showRunner, setShowRunner] = useState(false);
  const sectionRef = useRef(null);
  const fullText = "Let's build something amazing together!";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowRunner(true);
            let i = 0;
            const typing = setInterval(() => {
              if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
              } else {
                clearInterval(typing);
              }
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const socialLinks = [
    { id: 1, name: 'WhatsApp', icon: <FaWhatsapp />, link: 'https://wa.me/0998280316' },
    { id: 2, name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/tamara-abo-hassoun/' },
    { id: 3, name: 'Facebook', icon: <FiFacebook />, link: 'https://www.facebook.com/tamara.ah.125?mibextid=ZbWKwL' },
    { id: 4, name: 'Instagram', icon: <FiInstagram />, link: 'https://www.instagram.com/tamaraabohassoun?igsh=MXUwMzNlaXEwdGtpbg==' },
  ];

  return (
    <section ref={sectionRef} className="relative text-white py-15! overflow-hidden min-h-screen flex items-center shadow-[0_-10px_30px_rgba(165,94,234,0.2)]">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full bg-[#a55eea]/5 blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#3b82f6]/5 blur-3xl animate-pulse bottom-0 right-0"></div>
      </div>

      <div className="center-container relative z-10 w-full">
       
        <div className="text-center mb-15!">
          <h2 className="text-3xl md:text-5xl font-bold min-h-[4rem]">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#3b82f6] bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-pulse text-[#a55eea]">|</span>
          </h2>
        </div>

       
        <div className="relative flex justify-center items-center h-80">
          <div
            className={`absolute transition-all duration-1000 ease-out ${
              showRunner ? 'left-1/2 -translate-x-1/2' : '-left-32'
            }`}
          >
        
            <div className="absolute inset-0 rounded-full blur-2xl opacity-40"
                 style={{ background: 'radial-gradient(circle, rgba(165,94,234,0.3) 0%, transparent 70%)' }}>
            </div>
           
            <div className="relative w-56 h-56">
             
              <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc] to-[#60a5fa] rounded-full shadow-xl animate-float"
                   style={{ filter: 'drop-shadow(0 0 15px #a55eea)' }}>
              </div>
             
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
             
              <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#a55eea] rounded-full shadow-md animate-wave"
                   style={{ filter: 'drop-shadow(0 0 8px #a55eea) drop-shadow(0 0 15px #c084fc)' }}></div>
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#a55eea] rounded-full shadow-md animate-wave"
                   style={{ filter: 'drop-shadow(0 0 8px #a55eea) drop-shadow(0 0 15px #c084fc)' }}></div>
             
              <div className="absolute bottom-0 left-1/4 w-6 h-10 bg-[#8b5cf6] rounded-b-full"
                   style={{ filter: 'drop-shadow(0 0 8px #8b5cf6) drop-shadow(0 0 15px #a55eea)' }}></div>
              <div className="absolute bottom-0 right-1/4 w-6 h-10 bg-[#8b5cf6] rounded-b-full"
                   style={{ filter: 'drop-shadow(0 0 8px #8b5cf6) drop-shadow(0 0 15px #a55eea)' }}></div>
              
            
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex gap-6 shadow-xl">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:scale-125 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, #c084fc, #a55eea, #00ffff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 8px #a55eea) drop-shadow(0 0 12px #c084fc)',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showRunner}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;