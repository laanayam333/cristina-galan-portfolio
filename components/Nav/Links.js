import Link from 'next/link';
import { motion } from 'framer-motion';

const Links = ({ title, id, toggleMenu, setToggleMenu }) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <Link href={`/${id}`}>
        <a className="h-full">
          <div className="flex h-full w-full">
            <motion.h2 className="tw-subheading text-white dark:text-black">
              {title}
            </motion.h2>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default Links;
