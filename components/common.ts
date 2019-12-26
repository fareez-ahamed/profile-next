import { useState, useEffect, RefObject } from "react";

export function useIncrementingNumber(
  n: number
): [number, () => void, boolean] {
  const [i, setI] = useState(0);
  const delta = n / 10;

  let handle = null;

  function increment() {
    setI(x => {
      return x < n ? x + delta : n;
    });
  }

  function start() {
    if (!handle) {
      handle = setInterval(increment, 100);
    }
  }

  useEffect(() => {
    return () => {
      if (handle) clearInterval(handle);
    };
  }, []);

  return [i, start, i !== 0];
}

export function useScreenEnter(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  const [entered, setEntered] = useState(false);

  function activate() {
    if (
      ref.current &&
      isInViewPort(ref.current.getBoundingClientRect()) &&
      !entered
    ) {
      callback();
      setEntered(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", activate);
    return () => document.removeEventListener("scroll", activate);
  });
}

function isInViewPort(rect: DOMRect): boolean {
  if (
    screen.height >= rect.bottom &&
    screen.width >= rect.right &&
    rect.top >= 0 &&
    rect.left >= 0
  )
    return true;
  return false;
}
