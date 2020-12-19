import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { menuVariants } from '@/utils/framer';
import { MENU_LINKS } from '@/utils/constants';

import List from '@/components/Nav/Links';

const Menu = ({ toggleMenu, setToggleMenu, onCursor, x, y }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
            <motion.main
              className="fixed top-0 left-0 h-screen w-screen bg-black dark:bg-white z-100 overflow-hidden custom-container"
              initial="initial"
              animate="animate"
              exit="exit"
              custom={toggleMenu}
              variants={menuVariants}
            >
              <header className="flex items-center justify-end h-16 lg:h-20 2xl:h-24">
                <div
                  onClick={() => setToggleMenu(!toggleMenu)}
                  onMouseEnter={() => onCursor('pointer')}
                  onMouseLeave={onCursor}
                >
                  <button className="origin-center border-none bg-none focus:outline-none custom-link text-white dark:text-black">
                    Cerrar
                  </button>
                </div>
              </header>

              <ul className="flex flex-col justify-center items-center space-y-4 h-4/5">
                {MENU_LINKS.map((menuItem) => (
                  <List
                    key={menuItem.id}
                    title={menuItem.title}
                    thumbnailPosition={menuItem.thumbnailPosition}
                    src={menuItem.src}
                    id={menuItem.id}
                    x={x}
                    y={y}
                    onCursor={onCursor}
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                  />
                ))}
              </ul>

              <footer
                onClick={() => setToggleMenu(!toggleMenu)}
                onMouseEnter={() => onCursor('pointer')}
                onMouseLeave={onCursor}
              >
                <Link href="/">
                  <a className="custom-link text-white dark:text-black">
                    {`<< Inicio / Proyectos`}
                  </a>
                </Link>
              </footer>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

//! EXPORTS

export default Menu;
