const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="flex items-center justify-center mt-24 mb-12 cutsom-container">
      <small className="text-xs lg:text-sm 2xl:text-base text-gray-400 dark:text-gray-700 custom-animation">
        © {year} Cristina Galán. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
