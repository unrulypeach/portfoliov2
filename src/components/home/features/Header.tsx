import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import NavBar from './NavBar';
import { MenuToggle } from './menuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 120% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 120% 0)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="self-end w-full absolute" //can't scroll with absolute
    >
      <MenuToggle toggle={toggleOpen} />
      <motion.div
        variants={sidebar}
        className="absolute top-0 right-0 h-screen w-screen bg-lightBG"
      />

      <NavBar isOpen={isOpen} toggle={toggleOpen} />
    </motion.nav>
  );
}

export default Header;
