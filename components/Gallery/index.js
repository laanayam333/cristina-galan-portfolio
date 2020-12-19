import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

import Modal from '@/components/Gallery/Modal';

const Gallery = ({ gallery, onCursor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleModalToggle = (key) => {
    setIsModalOpen(!isModalOpen);
    setSelected(key);
  };

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <>
      {gallery && (
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-12 2xl:gap-x-16 gap-y-8 lg:gap-y-24 2xl:gap-y-28 custom-container custom-padding"
          ref={contentRef}
          initial="hidden"
          animate={animation}
          variants={scrollVariants}
        >
          {gallery.fields.map((elm, index) => (
            <div>
              <Image
                className="object-cover"
                key={index}
                src={elm.photo.url}
                alt={elm.photo.alt}
                layout="responsive"
                width={elm.photo.dimensions.width}
                height={elm.photo.dimensions.height}
                onClick={() => handleModalToggle(index)}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
              />
            </div>
          ))}

          <Modal
            gallery={gallery}
            selected={selected}
            isModalOpen={isModalOpen}
            handleModalToggle={handleModalToggle}
            onCursor={onCursor}
          />
        </motion.section>
      )}
    </>
  );
};

export default Gallery;
