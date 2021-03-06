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
    triggerOnce: true,
    threshold: 0.25
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <>
      {gallery && (
        <motion.section
          id="gallery"
          ref={contentRef}
          initial="initial"
          animate={animation}
          variants={scrollVariants}
        >
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 2xl:gap-16 tw-separator-t py-10 lg:py-14 2xl:py-16 tw-container-sm">
            {gallery.fields.map((elm, index) => (
              <div className="flex flex-col justify-center" key={index}>
                <Image
                  key={index}
                  src={elm.photo.url}
                  alt={elm.photo.alt}
                  layout="responsive"
                  objectFit="cover"
                  quality={75}
                  width={elm.photo.dimensions.width}
                  height={elm.photo.dimensions.height}
                  onClick={() => handleModalToggle(index)}
                  onMouseEnter={() => onCursor('tw-hovered')}
                  onMouseLeave={onCursor}
                />
              </div>
            ))}
          </div>

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
