//! IMPORT

//* Dependencies
import { useEffect } from 'react';
import Link from 'next/link';
import { setCookie } from 'nookies';
import { motion } from 'framer-motion';

import {
  useGlobalDispatchContext,
  useGlobalStateContext
} from '@/utils/context/global-context';

import { parentVariants, headerVariants } from '@/utils/framer';

import { MENU_LINKS } from '@/utils/constants';

import MenuIcon from '@/components/Icons/MenuIcon';
import ActiveLink from '@/components/Nav/ActiveLink';

//! MAIN LOGIC

const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  useEffect(() => {
    setCookie(null, 'theme', currentTheme, {
      maxAge: 30 * 24 * 60 * 60
    });
  }, [currentTheme]);

  return (
    <motion.header
      className="absolute top-0 right-0 left-0 z-99 flex justify-between items-center w-full h-20 lg:h-28 2xl:h-32 tw-container-sm"
      variants={parentVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex items-center space-x-4 lg:space-x-6 2xl:space-x-7"
        variants={headerVariants}
      >
        <Link href="/">
          <a
            className="tw-link"
            onMouseEnter={() => onCursor('tw-hovered')}
            onMouseLeave={onCursor}
          >
            C
          </a>
        </Link>

        <span
          className="inline-block h-3 w-3 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6 rounded-full bg-red-400 hover:bg-black dark:hover:bg-white tw-animation"
          onClick={toggleTheme}
          onMouseEnter={() => onCursor('tw-pointer')}
          onMouseLeave={onCursor}
        ></span>

        <Link href="/">
          <a
            className="tw-link"
            onMouseEnter={() => onCursor('tw-hovered')}
            onMouseLeave={onCursor}
          >
            G
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="block lg:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
        onMouseEnter={() => onCursor('tw-hovered')}
        onMouseLeave={onCursor}
        variants={headerVariants}
      >
        <button className="border-none bg-none outline-none ring-0 focus:outline-none tw-link">
          <MenuIcon />
        </button>
      </motion.div>

      <motion.div className="hidden lg:block" variants={headerVariants}>
        <ul className="flex lg:space-x-14 2x:space-x-16">
          {MENU_LINKS &&
            MENU_LINKS.map((link, index) => (
              <li
                key={index}
                onMouseEnter={() => onCursor('tw-hovered')}
                onMouseLeave={onCursor}
              >
                <ActiveLink href={`/${link.id}`}>
                  <a className="tw-link">{link.title}</a>
                </ActiveLink>
              </li>
            ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

//! EXPORT

export default Header;
