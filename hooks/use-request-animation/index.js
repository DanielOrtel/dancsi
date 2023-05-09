import { useCallback, useEffect, useRef } from "react";

export default function useRequestAnimation(shouldAnimate, callback) {
  // Use useRef for mutable variables that we want to persist
  // without triggering a rerender on their change
  const requestRef = useRef();
  const previousTimeRef = useRef(0);

  const animate = (time) => {
    if (!previousTimeRef.current) {
      previousTimeRef.current = time;
    }

    const deltaTime = time - previousTimeRef.current;
    // callback needs to return a boolean value for ticks
    const ticks = callback(deltaTime);

    // only increase time delta if callback returned true
    if (ticks) {
      previousTimeRef.current = time;
    }

    // always request a new animation frame, even if you don't change anything
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
}
