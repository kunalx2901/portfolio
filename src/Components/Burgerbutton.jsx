import { useState } from 'react';

const BurgerButton = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <button
      className="flex flex-col space-y-1.5 p-2 focus:outline-none"
      onClick={toggleOpen}
    >
      <div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></div>
    </button>
  );
};

export default BurgerButton;