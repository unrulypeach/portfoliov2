import { motion } from 'framer-motion';
import NavBtn from './NavBtn';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const logoVariants = {
  open: {
    scale: [2, 1],
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
  closed: {
    scale: 0,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },
};

function NavBar({ toggle, isOpen }: { isOpen: boolean; toggle: (i?: number | undefined) => void }) {
  return (
    <motion.div
      variants={variants}
      className={`flex flex-col items-center justify-center h-screen w-full 
                 z-20 ${isOpen ? 'absolute' : 'none'}`} //desktop:w-auto desktop:flex-row desktop:pr-8 desktop:block
    >
      <motion.a
        href="#home"
        variants={logoVariants}
        onClick={() => toggle()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-auto mb-6 btn btn-ghost text-icon rounded-full z-[inherit] text-base hover:underline"
        // desktop:w-auto desktop:p-[15px] desktop:opacity-50 desktop:hover:opacity-100
      >
        LC
      </motion.a>
      <NavBtn title="about" toggle={toggle} />
      <NavBtn title="projects" toggle={toggle} />
      <NavBtn title="resume" toggle={toggle} />
      <NavBtn title="contact" toggle={toggle} />
    </motion.div>
  );
}

export default NavBar;
