import React, { useEffect, useRef } from 'react';

const Overlay = ({ message, onClose }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={overlayRef} className="bg-white p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-4 cursor-pointer text-black">x</button>
        <p className='text-black'>{message}</p>
      </div>
    </div>
  );
};

export default Overlay;