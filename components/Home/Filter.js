const Filter = ({ method, isSelected, label, length, onCursor }) => {
  return (
    <button
      className={`flex flex-col items-center lg:flex-row lg:items-baseline tw-link focus:outline-none ${
        isSelected ? 'filter-btn-on' : ''
      }`}
      type="button"
      onClick={() => method()}
      onMouseEnter={() => onCursor('tw-hovered')}
      onMouseLeave={onCursor}
    >
      {label}
      <span className="ml-1 lg:ml-2 2xl:ml-3 text-xs lg:text-sm 2xl:text-base text-black dark:text-white tw-animation">
        ( {length} )
      </span>
    </button>
  );
};

export default Filter;
