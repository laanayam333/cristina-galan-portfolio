const Filter = ({ method, isSelected, label, length, onCursor }) => {
  return (
    <button
      className={`custom-link focus:outline-none ${
        isSelected ? 'filter-btn-on' : ''
      }`}
      type="button"
      onClick={() => method()}
      onMouseEnter={() => onCursor('hovered')}
      onMouseLeave={onCursor}
    >
      {label}
      <span className="ml-1 lg:ml-2 2xl:ml-3 text-xs lg:text-sm 2xl:text-base text-black dark:text-white custom-animation">
        ( {length} )
      </span>
    </button>
  );
};

export default Filter;
