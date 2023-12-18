import { useEffect, useState } from 'react';

/*
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
The useSticky custom hook is designed to manage the sticky behavior of an element
 based on other element's intersection. It uses the useState and useEffect hooks to track 
 and update the sticky state. The hook returns the sticky state and functions to 
 set references to the observed and observer elements.

 usage example:
<div ref={el=>setObserverRef(el)} className={`${sticky? "sticky -bottom-1 bg-slate-200 ...." : ""}`}></div>
<div ref={el=>setObservedRef(el)}></div>
 */
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const useSticky = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [observerRef, setObserverRef] = useState<HTMLDivElement | null>(null);
  const [observedRef, setObservedRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionOneObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return setSticky(true);
        setSticky(false);
      });
    }, options);
    if (observedRef) sectionOneObserver.observe(observedRef);

    return () => {
      if (observedRef) sectionOneObserver.unobserve(observedRef);
    };
  }, [observedRef, observerRef]);

  return { sticky, setObservedRef, setObserverRef };
};
