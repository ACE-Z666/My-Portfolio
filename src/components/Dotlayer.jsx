import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DotLayer = () => {
  const dotContainerRef = useRef(null);

  useEffect(() => {
    const dots = dotContainerRef.current.children;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      Array.from(dots).forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const dotX = dotRect.left + dotRect.width / 2;
        const dotY = dotRect.top + dotRect.height / 2;

        const distanceX = dotX - clientX;
        const distanceY = dotY - clientY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const maxDistance = 150;
        if (distance < maxDistance && distance > 75) {
          const angle = Math.atan2(distanceY, distanceX);
          const moveX = Math.cos(angle) * (maxDistance - distance);
          const moveY = Math.sin(angle) * (maxDistance - distance);

          gsap.to(dot, {
            duration: 0.3,
            x: moveX,
            y: moveY,
            ease: 'power2.out',
          });
        } else {
          gsap.to(dot, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'power2.out',
          });
        }
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = 0; // Adjust if you have a footer with a known height

      Array.from(dots).forEach((dot) => {
        let offsetX = 0, offsetY = 0, opacity = 1;

        if (scrollPosition > windowHeight) {
          const moveDistance = 300; // Adjust this as needed
          const angle = Math.atan2(window.innerHeight - dot.getBoundingClientRect().top, window.innerWidth - dot.getBoundingClientRect().left);
          offsetX = Math.cos(angle) * moveDistance;
          offsetY = Math.sin(angle) * moveDistance;

          opacity = 1 - (scrollPosition - windowHeight) / (documentHeight - windowHeight - footerHeight);
          if (scrollPosition > documentHeight - windowHeight - footerHeight) {
            opacity = 0;
          }
        } else if (scrollPosition < 0) {
          offsetX = 0;
          offsetY = 0;
          opacity = 1;
        } else {
          const moveDistance = 100; // Adjust this as needed
          const angle = Math.PI / 4;
          offsetX = -Math.cos(angle) * moveDistance;
          offsetY = -Math.sin(angle) * moveDistance;

          opacity = 1;
        }

        gsap.to(dot, {
          duration: 0.5,
          x: offsetX,
          y: offsetY,
          opacity: opacity,
          ease: 'power1.out',
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Initial call to set positions based on the current scroll position

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={dotContainerRef} className="dot-layer absolute inset-0 z-10 pointer-events-none">
      {Array.from({ length: 30 }).map((_, index) => {
        let top, left;
        do {
          top = Math.random() * 100;
          left = Math.random() * 100;
        } while (
          Math.sqrt((top - 50) ** 2 + (left - 50) ** 2) < 15 ||
          (left >= 80 && left <= 90 && top >= 40 && top <= 60)
        );

        return (
          <div
            key={index}
            className="dot absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default DotLayer;
