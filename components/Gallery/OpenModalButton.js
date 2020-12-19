const OpenModalButton = ({ children, handleClick }) => {
  return (
    <motion.button
      className=""
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default OpenModalButton;
