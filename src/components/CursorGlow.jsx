import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const { clientX, clientY } = e;
      glow.style.transform = `translate3d(${clientX - 220}px, ${clientY - 220}px, 0)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 440,
        height: 440,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        background:
          'radial-gradient(circle, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.05) 40%, transparent 70%)',
        transition: 'transform 0.25s ease-out',
        willChange: 'transform',
      }}
    />
  );
}
