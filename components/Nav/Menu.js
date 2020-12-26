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
              className="fixed top-0 left-0 flex flex-col justify-center h-screen w-screen bg-black dark:bg-white z-100 overflow-hidden px-5"
              initial="initial"
              animate="animate"
              exit="exit"
              custom={toggleMenu}
              variants={menuVariants}
            >
              <header className="fixed top-0 left-0 right-0 flex justify-between px-5 py-10 h-20">
                <div onClick={() => setToggleMenu(!toggleMenu)}>
                  <Link href="/">
                    <a className="tw-link text-white dark:text-black">
                      {`<< Proyectos`}
                    </a>
                  </Link>
                </div>

                <div onClick={() => setToggleMenu(!toggleMenu)}>
                  <button className="origin-center border-none bg-none focus:outline-none tw-link text-white dark:text-black">
                    Cerrar
                  </button>
                </div>
              </header>

              <ul className="flex flex-col justify-center space-y-12 h-2/3">
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
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

//! EXPORTS

export default Menu;
