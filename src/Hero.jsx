import { useState, useEffect } from "react";
import StarBackground from "./StarBackground";
import SignatureEffect from "./SignatureEffect";
import ProfileImage from "./ProfileImage";
import LeftText from "./LeftText";
import Header from "./Header";

export default function Hero() {
  const [showSignature, setShowSignature] = useState(true);
  const [fadeOutSignature, setFadeOutSignature] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [imagePosition, setImagePosition] = useState("center");
  const [showLeftText, setShowLeftText] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const signatureDuration = 8000;
    const fadeOutDuration = 800; // مدة الـ fade out
    const waitAfterFadeOut = 200; // انتظار قصير بعد الـ fade out
    const centerHold = 400;
    
    // بدء الـ fade out
    const fadeTimer = setTimeout(() => {
      setFadeOutSignature(true);
    }, signatureDuration);
    
    // إخفاء الـ signature وإظهار العناصر الأخرى
    const timer1 = setTimeout(() => {
      setShowSignature(false);
      setShowProfile(true);
      setShowHeader(true);
      setImagePosition("center");
    }, signatureDuration + fadeOutDuration + waitAfterFadeOut);

    const timer2 = setTimeout(() => {
      if (!isMobile) {
        setImagePosition("right");
      }
      setShowLeftText(true);
    }, signatureDuration + fadeOutDuration + waitAfterFadeOut + centerHold);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isMobile]);

  useEffect(() => {
    if (showSignature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSignature]);

  return (
    <section className="relative">
      <div className="center-container">
        <StarBackground />
        {showHeader && <Header />}
        <SignatureEffect show={showSignature} fadeOut={fadeOutSignature} />
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {showProfile && <ProfileImage position={imagePosition} isMobile={false} />}
          {showLeftText && <LeftText isMobile={false} />}
        </div>
        
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {showProfile && showLeftText && (
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 pt-10! px-4">
              <div className="mb-8">
                <ProfileImage position="center" isMobile={true} />
              </div>
              <div className="w-full max-w-sm">
                <LeftText isMobile={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}