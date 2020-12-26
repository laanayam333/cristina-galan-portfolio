const Footer = ({ onCursor }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="flex items-center justify-center pt-12 pb-6 lg:pt-20 lg:pb-10 2xl:pt-32 2xl:pb-12 cutsom-container">
      <small className="text-xs lg:text-sm 2xl:text-base text-gray-400 dark:text-gray-700 tw-animation">
        © {year} Cristina Galán.{' '}
        <span>
          Website by{' '}
          <a
            className="italic"
            onMouseEnter={() => onCursor('tw-hovered')}
            onMouseLeave={onCursor}
            href="https://github.com/laanayam333"
            target="_blank"
            rel="noopener"
          >
            Brother Sailor
          </a>
          .
        </span>
      </small>
    </footer>
  );
};

export default Footer;
