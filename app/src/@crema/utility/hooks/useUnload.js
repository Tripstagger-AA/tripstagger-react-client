import React from 'react';

export const useUnload = function_ => {
  const callback = React.useRef(function_);

  React.useEffect(() => {
    const onUnload = callback.current;
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [callback]);
};
