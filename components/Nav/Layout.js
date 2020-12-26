import { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { WEB_NAME } from '@/utils/constants';

import Cursor from '@/components/Shared/Cursor';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import Menu from '@/components/Nav/Menu';
import Header from '@/components/Nav/Header';
import Footer from '@/components/Nav/Footer';

//! MAIN LOGIC

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme, cursorStyles } = useGlobalStateContext();

  const [toggleMenu, setToggleMenu] = useState(false);

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [currentTheme]);

  useEffect(() => {
    toggleMenu === true
      ? document.querySelector('html').classList.add('body-lock')
      : document.querySelector('html').classList.remove('body-lock');
  }, [toggleMenu]);

  return (
    <>
      <Cursor toggleMenu={toggleMenu} />
      <Header
        siteTitle={WEB_NAME}
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Menu
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
      {/* <Footer onCursor={onCursor} /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
