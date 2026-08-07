import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  style,
  strength = 18,
  onClick,
  'aria-label': ariaLabel,
}) {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const xPos = e.clientX - rect.left - size / 2;
    const yPos = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x: xPos, y: yPos, size }]);
    onClick?.(e);
  };

  useEffect(() => {
    if (ripples.length === 0) return;
    const t = setTimeout(() => {
      setRipples((r) => r.slice(1));
    }, 650);
    return () => clearTimeout(t);
  }, [ripples]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={className}
      style={{ ...style, x: sx, y: sy, display: 'inline-block', position: 'relative' }}
      aria-label={ariaLabel}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </motion.div>
  );
}
