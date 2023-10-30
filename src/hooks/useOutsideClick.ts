import { useEffect, useRef } from 'react';

const useOutsideClick = (handler: () => void, listenCapturing = false) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    // click outside of the component was assigned to the return ref
    // this the handler will be triggered
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };
    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
};

export default useOutsideClick;
