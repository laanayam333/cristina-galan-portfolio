import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Card = ({ expo, onCursor }) => {
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
    <motion.li
      className="w-full h-40 lg:h-56 2xl:h-64"
      ref={contentRef}
      initial="initial"
      animate={animation}
      variants={scrollVariants}
      onMouseEnter={() => onCursor('tw-hovered')}
      onMouseLeave={onCursor}
    >
      <Link href={`/expos/${expo.node._meta.uid}`}>
        <a>
          <div className="relative h-full w-full">
            <Image
              className="relative"
              src={expo.node.cover_photo.url}
              layout="fill"
              objectFit="cover"
              quality={100}
            />

            <div
              className="relative w-full h-full z-99 flex justify-start items-end p-2.5 lg:p-3.5 2xl:p-4 tw-card-title text-white dark:text-black hover:opacity-0 tw-animation"
              style={{ backgroundColor: `${expo.node.card_color}` }}
            >
              {expo.node.location[0].text}
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default Card;
