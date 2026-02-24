import React from "react";

export default function LeftText({ isMobile = false }) {
  const containerStyle = isMobile ? {
    position: "relative",
    zIndex: 30,
    color: "#fff",
    textShadow: "0 0 20px rgba(200, 150, 255, 0.8), 2px 2px 4px rgba(0,0,0,0.5)",
    fontFamily: "'Playfair Display', serif",
    textAlign: "center",
    width: "100%",
  } : {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    color: "#fff",
    textShadow: "0 0 20px rgba(200, 150, 255, 0.8), 2px 2px 4px rgba(0,0,0,0.5)",
    fontFamily: "'Playfair Display', serif",
    animation: "fadeInLeft 1s ease-out", 
    textAlign: "left",
    maxWidth: "600px",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          fontSize: isMobile ? "2.5rem" : "6rem",
          fontWeight: "900",
          lineHeight: 1,
          marginBottom: "0.5rem",
          background: "linear-gradient(45deg, #8b5cf6, #3b82f6, #1e3a8a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 30px #8b5cf6",
        }}
      >
        Hi,
      </div>

      
      <div
        style={{
          fontSize: isMobile ? "2rem" : "4rem",
          fontWeight: "700",
          lineHeight: 1.2,
          marginBottom: "0.5rem",
        }}
      >
        I am <span style={{ 
          fontFamily: "'Amiri', serif",
          fontSize: isMobile ? "2.2rem" : "4.5rem",
          background: "linear-gradient(45deg, #c084fc, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Tamara</span>
      </div>

      <div
        style={{
          fontSize: isMobile ? "1.2rem" : "2.5rem",
          fontWeight: "400",
          letterSpacing: isMobile ? "1px" : "2px",
          borderLeft: "4px solid #8b5cf6",
          paddingLeft: isMobile ? "1rem" : "1.5rem",
          color: "#e0e7ff",
        }}
      >
        and I am a front end developer
      </div>

      {!isMobile && (
        <style>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateY(-50%) translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(-50%) translateX(0);
            }
          }
        `}</style>
      )}
    </div>
  );
}