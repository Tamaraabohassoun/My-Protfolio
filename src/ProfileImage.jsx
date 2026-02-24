import { useEffect, useRef } from "react";
import profilePic from "../src/assets/mee.jpeg"


export default function ProfileImage({ position, isMobile = false }) {
  const glowRef = useRef(null);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (glowRef.current) {
        glowRef.current.style.filter = "blur(8px) brightness(1.5)";
        setTimeout(() => {
          if (glowRef.current)
            glowRef.current.style.filter = "blur(5px) brightness(1.2)";
        }, 300);
      }
    }, 2500);
    return () => clearInterval(pulseInterval);
  }, []);

  const getLeft = () => {
    if (isMobile) return "50%";
    
    switch (position) {
      case "center":
        return "50%";
      case "left":
        return "calc(50% - 250px)";
      case "right":
        return "calc(50% + 250px)";
      default:
        return "50%";
    }
  };

  const containerStyle = isMobile ? {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "180px",
    height: "180px",
  } : {
    position: "absolute",
    top: "50%",
    left: getLeft(),
    transform: "translate(-50%, -50%)",
    transition: "left 0.5s ease-in-out",
    zIndex: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "280px",
    height: "280px",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      >
       
        <div
          style={{
            position: "absolute",
            top: isMobile ? "-8px" : "-12px",
            left: isMobile ? "-8px" : "-12px",
            right: isMobile ? "-8px" : "-12px",
            bottom: isMobile ? "-8px" : "-12px",
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #1e3a8a, #8b5cf6, #3b82f6, #1e3a8a, #8b5cf6, #3b82f6, #1e3a8a)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: isMobile ? "8px" : "12px",
            animation: "twistGlow 10s linear infinite, rotateGradient 14s linear infinite",
            filter: isMobile ? "blur(5px) brightness(1.1)" : "blur(8px) brightness(1.2)",
            opacity: 0.8,
            mixBlendMode: "screen",
            boxShadow: isMobile ? "0 0 20px rgba(30, 58, 138, 0.5)" : "0 0 30px rgba(30, 58, 138, 0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: isMobile ? "-5px" : "-8px",
            left: isMobile ? "-5px" : "-8px",
            right: isMobile ? "-5px" : "-8px",
            bottom: isMobile ? "-5px" : "-8px",
            borderRadius: "50%",
            background: "conic-gradient(from 180deg, #8b5cf6, #3b82f6, #1e3a8a, #8b5cf6, #3b82f6)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: isMobile ? "5px" : "8px",
            animation: "twistGlow 7s linear infinite reverse, rotateGradient 10s linear infinite",
            filter: isMobile ? "blur(4px) brightness(1.2)" : "blur(6px) brightness(1.4)",
            opacity: 0.9,
            mixBlendMode: "screen",
            boxShadow: isMobile ? "0 0 25px rgba(139, 92, 246, 0.6)" : "0 0 40px rgba(139, 92, 246, 0.7)",
          }}
        />
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            top: isMobile ? "-3px" : "-5px",
            left: isMobile ? "-3px" : "-5px",
            right: isMobile ? "-3px" : "-5px",
            bottom: isMobile ? "-3px" : "-5px",
            borderRadius: "50%",
            background: "conic-gradient(from 90deg, #3b82f6, #1e3a8a, #8b5cf6, #3b82f6, #1e3a8a)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: isMobile ? "3px" : "5px",
            animation: "twistGlow 5s linear infinite, rotateGradient 7s linear infinite reverse",
            filter: isMobile ? "blur(3px) brightness(1.4)" : "blur(4px) brightness(1.6)",
            opacity: 1,
            mixBlendMode: "screen",
            boxShadow: isMobile ? "0 0 30px rgba(59, 130, 246, 0.7)" : "0 0 50px rgba(59, 130, 246, 0.8)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: isMobile ? "-2px" : "-2px",
            left: isMobile ? "-2px" : "-2px",
            right: isMobile ? "-2px" : "-2px",
            bottom: isMobile ? "-2px" : "-2px",
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #ffffff, #a78bfa, #93c5fd, #c7d2fe, #ffffff)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "2px",
            animation: "rotateGradient 4s linear infinite",
            filter: isMobile ? "blur(1px) brightness(1.8)" : "blur(2px) brightness(2)",
            opacity: 0.7,
            mixBlendMode: "screen",
          }}
        />

        <img
          src={profilePic}
          alt="Tamara"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 30%",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
            position: "relative",
            zIndex: 10,
            transform: "scale(0.98)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(0.98)")}
        />
      </div>

      <style>{`
        @keyframes rotateGradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twistGlow {
          0% {
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            filter: blur(8px) brightness(1.1);
          }
          25% {
            border-radius: 58% 42% 65% 35% / 42% 58% 35% 65%;
            filter: blur(9px) brightness(1.3);
          }
          50% {
            border-radius: 42% 58% 35% 65% / 58% 42% 65% 35%;
            filter: blur(10px) brightness(1.5);
          }
          75% {
            border-radius: 65% 35% 58% 42% / 35% 65% 42% 58%;
            filter: blur(9px) brightness(1.3);
          }
          100% {
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            filter: blur(8px) brightness(1.1);
          }
        }
      `}</style>
    </div>
  );
}