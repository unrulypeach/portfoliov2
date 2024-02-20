import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path fill="#b7c7e8" strokeWidth="3" stroke="#dddddd" strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle }: { toggle: (i?: number | undefined) => void }) => (
  <motion.button
    whileHover={{ scale: 1.12, opacity: 0.9 }}
    className="absolute p-4 pt-6 top-0 right-[4px] stroke opacity-40 z-30"
    onClick={() => toggle()}
  >
    <svg width="30" height="30" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </motion.button>
);
