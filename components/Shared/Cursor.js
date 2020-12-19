import { useEffect, useState, useRef } from 'react';
import { useGlobalStateContext } from '@/utils/context/global-context';

const Cursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext();

  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400
  });

  // const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${!!cursorType ? 'hovered' : ''} ${cursorType} ${
          toggleMenu ? 'nav-open' : ''
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </>
  );
};

export default Cursor;
