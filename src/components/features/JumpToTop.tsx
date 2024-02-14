import { motion } from 'framer-motion';

function JumpToTop() {
  return (
    <a href="#home">
      <div className="flex items-center absolute right-[-4px] desktop:right-12 bottom-8 h-min w-20 desktop:w-24 stroke-title">
        <span className="pointer-events-none text-xs relative left-[36.5px] desktop:left-[43px] top-[7px] text-black opacity-30">
          TOP
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 -2 11 11">
          <motion.g>
            <motion.polygon
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.5,
                  // repeat: Infinity,
                  repeatType: 'loop',
                  // repeatDelay: 1,
                },
              }}
              points="13.5 6 8 6 10.75 0.5 13.5 6"
              fill="#b7c7e8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-20 hover:opacity-80 cursor-pointer"
            ></motion.polygon>
          </motion.g>
        </svg>
      </div>
    </a>
  );
}

export default JumpToTop;
{
  /* <motion.div
      className="circle absolute right-4 bottom-4 w-12 h-12"
      animate={{ rotate: 360 }}
      transition={{ loop: Infinity, ease: 'linear', duration: 1 }}
    >
      <span className="text-title">Jump To Top</span>
    </motion.div> */
}
