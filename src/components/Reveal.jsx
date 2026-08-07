import { motion } from 'framer-motion';

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

export default function Reveal({
  children,
  as = 'div',
  type = 'slideUp',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  style,
}) {
  const MotionComp = motion[as];
  return (
    <MotionComp
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[type]}
    >
      {children}
    </MotionComp>
  );
}
