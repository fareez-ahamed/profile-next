import { useState, useEffect, createRef } from "react";
import React from "react";

function inViewPort(rect: DOMRect): boolean {
  if (
    screen.height >= rect.bottom &&
    screen.width >= rect.right &&
    rect.top >= 0 &&
    rect.left >= 0
  )
    return true;
  return false;
}

const StatNumber: React.FC<{
  value: number;
  className?: string;
  fixedPoint?: number;
}> = props => {
  const [i, start, started] = useIncrementingNumber(props.value);
  const ref = createRef<HTMLParagraphElement>();

  function activate() {
    if (
      ref.current &&
      inViewPort(ref.current.getBoundingClientRect()) &&
      !started
    ) {
      start();
      console.log("Activated");
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", activate);
    return () => document.removeEventListener("scroll", activate);
  });

  return (
    <p className={props.className} ref={ref}>
      {i.toFixed(props.fixedPoint || 0)}
    </p>
  );
};

function useIncrementingNumber(n: number): [number, () => void, boolean] {
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

export default StatNumber;
