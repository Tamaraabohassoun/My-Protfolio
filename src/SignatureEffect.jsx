import { useEffect, useState } from "react";

export default function SignatureEffect({ show = true, fadeOut = false }) {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [visible, setVisible] = useState(true);

  const firstLineChars = [
    { char: "T", dash: 800, duration: 0.5, delay: 0 },
    { char: "a", dash: 800, duration: 0.25, delay: 0.3 },
    { char: "m", dash: 800, duration: 0.35, delay: 0.6 },
    { char: "a", dash: 800, duration: 0.45, delay: 0.9 },
    { char: "r", dash: 800, duration: 0.55, delay: 0.12 },
    { char: "a", dash: 800, duration: 0.65, delay: 0.15 },
  ];

 
  const secondLineChars = [
    { char: "f", dash: 800, duration: 0.5, delay: 0 },
    { char: "r", dash: 800, duration: 0.25, delay: 0.3 },
    { char: "o", dash: 800, duration: 0.35, delay: 0.6 },
    { char: "n", dash: 800, duration: 0.45, delay: 0.9 },
    { char: "t", dash: 800, duration: 0.55, delay: 0.12 },
    { char: " ", dash: 800, duration: 0.65, delay: 0.15 },
    { char: "e", dash: 800, duration: 0.75, delay: 0.18 },
    { char: "n", dash: 800, duration: 0.85, delay: 0.21 },
    { char: "d", dash: 800, duration: 0.95, delay: 0.24 },
    { char: " ", dash: 800, duration: 0.5, delay: 0.27 },
    { char: "d", dash: 800, duration: 0.25, delay: 0.30 },
    { char: "e", dash: 800, duration: 0.35, delay: 0.33 },
    { char: "v", dash: 800, duration: 0.45, delay: 0.36 },
    { char: "e", dash: 800, duration: 0.55, delay: 0.39 },
    { char: "l", dash: 800, duration: 0.65, delay: 0.42 },
    { char: "o", dash: 800, duration: 0.75, delay: 0.45 },
    { char: "p", dash: 800, duration: 0.85, delay: 0.48 },
    { char: "e", dash: 800, duration: 0.95, delay: 0.51 },
    { char: "r", dash: 800, duration: 0.5, delay: 0.54 },
  ];

  const firstLineEndTime = Math.max(...firstLineChars.map((c) => c.delay + c.duration));
  const secondLineEndTime = Math.max(...secondLineChars.map((c) => c.delay + c.duration));

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecondLine(true);
    }, firstLineEndTime * 1000);

    const timer2 = setTimeout(() => {
      setVisible(false);
    }, (firstLineEndTime + secondLineEndTime + 6) * 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [firstLineEndTime, secondLineEndTime]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease-out",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMid meet"
        className="signature-svg"
      >
        <defs>
          <filter id="glowSignature">
            
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
           
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#c084fc;#60a5fa;#1e3a8a;#c084fc"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="40%">
              <animate
                attributeName="stop-color"
                values="#60a5fa;#1e3a8a;#c084fc;#60a5fa"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#1e3a8a;#c084fc;#60a5fa;#1e3a8a"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            
          </linearGradient>
        </defs>

       
        <text
          x="50%"
          y="200"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="'Dancing Script', cursive"
          fontSize="200"
          fill="none"
          stroke="url(#signatureGradient)"
          strokeWidth="6"
          filter="url(#glowSignature)"
        >
          {firstLineChars.map((item, index) => (
            <tspan
              key={index}
              strokeDasharray={item.dash}
              strokeDashoffset={item.dash}
              style={{
                animation: `drawLetter ${item.duration}s ease-in-out ${item.delay}s forwards`,
              }}
            >
              {item.char}
            </tspan>
          ))}
        </text>

        
        {showSecondLine && (
          <text
            x="50%"
            y="420"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Dancing Script', cursive"
            fontSize="120"
            fill="none"
            stroke="url(#signatureGradient)"
            strokeWidth="5"
            filter="url(#glowSignature)"
          >
            {secondLineChars.map((item, index) => (
              <tspan
                key={index}
                strokeDasharray={item.dash}
                strokeDashoffset={item.dash}
                style={{
                  animation: `drawLetter ${item.duration}s ease-in-out ${item.delay}s forwards`,
                }}
              >
                {item.char}
              </tspan>
            ))}
          </text>
        )}

        <style>
          {`
            @keyframes drawLetter {
              to {
                stroke-dashoffset: 0;
              }
            }
            
            @media (max-width: 768px) {
              .signature-svg {
                transform: scale(1.3);
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
}