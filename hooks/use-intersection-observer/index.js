import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(ref, threshold, forward = false) {
  const [element, setElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  const cleanOb = () => {
    if (observer?.current) {
      observer?.current.disconnect();
    }
  };

  useEffect(() => {
    if (ref?.current) setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (element) {
      cleanOb();

      observer.current = new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting;

          if (!forward) {
            setIsIntersecting(isElementIntersecting);
          } else if (forward && !isIntersecting && isElementIntersecting) {
            setIsIntersecting(isElementIntersecting);
            cleanOb();
          }
        },
        { threshold }
      );

      observer.current.observe(element);
    }

    return () => {
      cleanOb();
    };
  }, [ref, element, threshold]);

  return isIntersecting;
}
