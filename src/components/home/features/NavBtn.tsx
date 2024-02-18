import { right } from 'assets/icons';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function NavBtn({ title, toggle }: { title: string; toggle: (i?: number | undefined) => void }) {
  return (
    <motion.a
      href={`#${title}`}
      onClick={() => toggle()}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex pointer cursor-pointer justify-around w-[80%]
                btn btn-ghost py-4 my-2
                group hover:underline z-[inherit] rounded-full desktop:w-56"
    >
      <div className="text-icon rounded-full desktop:p-0">{title.toUpperCase()}</div>
      <span className="text-4xl desktop:hidden">{right}</span>
    </motion.a>
  );
}

export default NavBtn;
