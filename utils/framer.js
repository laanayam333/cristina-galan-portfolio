//! TRANSITION

export const openModalTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 30
};

export const closeModalTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 35
};

const pageEasing = [0.87, 0, 0.13, 1];
const pageTransition = {
  duration: 0.6,
  ease: pageEasing
};

const mainEasing = [0.6, 0.05, -0.01, 0.9];
const mainTransition = {
  duration: 0.6,
  ease: mainEasing
};

//! VARIANTS

export const pageVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      ...pageTransition,
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  }
};

export const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const childVariants = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: mainTransition
  }
};

export const tableVariants = {
  initial: {
    y: 0,
    opacity: 0
  },
  animate: {
    y: 60,
    opacity: 1,
    transition: mainTransition
  }
};

export const scrollVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...mainTransition,
      staggerChildren: 0.5
    }
  }
};

export const menuVariants = {
  initial: { x: '-100%' },
  animate: (custom) => ({
    x: custom ? 0 : '-100%',
    transition: mainTransition
  }),
  exit: { x: '-100%', transition: mainTransition }
};

export const headerVariants = {
  hidden: { y: -72, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: mainTransition
};

export const modalVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const containerVariants = {
  initial: {
    top: '-50%',
    transition: {
      type: 'spring'
    }
  },
  isOpen: {
    top: '50%'
  },
  exit: {
    top: '-50%'
  }
};
