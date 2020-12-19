import Link from 'next/link';
import { motion } from 'framer-motion';

const Links = ({ title, id, onCursor, toggleMenu, setToggleMenu }) => {
  return (
    <motion.li initial="hidden" animate="visible" exit="exit">
      <Link href={`/${id}`}>
        <a className="h-full">
          <div className="flex h-full w-full">
            <motion.h2
              className="custom-subheading text-white dark:text-black"
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {title}
            </motion.h2>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default Links;
