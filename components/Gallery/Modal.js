import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { modalVariants } from '@/utils/framer';

const Modal = ({
  gallery,
  selected,
  isModalOpen,
  handleModalToggle,
  onCursor
}) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalVariants}
          onClick={() => handleModalToggle('')}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
        >
          <Image
            src={gallery.fields[selected].photo.url}
            alt={gallery.fields[selected].photo.alt}
            layout="fill"
            objectFit="contain"
            quality={100}
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
