import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // دالة لضبط حجم الـ canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    
    const stars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5,
    }));

    
    let shootingStar = {
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      trail: [],
      maxTrail: 15,        
    };

    
    function launchShootingStar() {
      
      const startX = -30;
      const startY = canvas.height + 30;

      
      const angle = Math.atan2(-canvas.height, canvas.width);
      const speed = 12; 

      shootingStar = {
        active: true,
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        trail: [],
        maxTrail: 15,
      };
    }

    
    const timer = setTimeout(launchShootingStar, 2000);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        100,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "#37005b");
      gradient.addColorStop(1, "#001523");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

     
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fillStyle = "white";
        ctx.fill();
      });
      if (shootingStar.active) {
       
        shootingStar.trail.push({ x: shootingStar.x, y: shootingStar.y });
        if (shootingStar.trail.length > shootingStar.maxTrail) {
          shootingStar.trail.shift();
        }

       
        for (let i = 0; i < shootingStar.trail.length; i++) {
          const point = shootingStar.trail[i];
          const ratio = i / shootingStar.trail.length; 
          const alpha = ratio * 0.6; 
          const radius = 1.5 + ratio * 2.5; 

          ctx.beginPath();
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(200, 150, 255, 0.7)"; 
          ctx.fillStyle = `rgba(200, 150, 255, ${alpha})`; 
          ctx.fill();
        }

       
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 4, 0, Math.PI * 2);
        ctx.shadowBlur = 18;
        ctx.shadowColor = "rgba(200, 150, 255, 0.9)";
        ctx.fillStyle = "rgba(220, 180, 255, 1)"; 
        ctx.fill();

      
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;

       
        if (shootingStar.x > canvas.width + 50 || shootingStar.y < -50) {
          shootingStar.active = false;
          shootingStar.trail = []; 
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // إضافة event listener للـ resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
        imageRendering: "crisp-edges",
      }}
    />
  );
}