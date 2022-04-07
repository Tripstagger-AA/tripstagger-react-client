import React from 'react';

export const useClickInside = (reference, callback) => {
  const handleClick = e => {
    if (reference.current && reference.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
