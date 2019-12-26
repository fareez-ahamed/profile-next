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
  const [i, setI] = useState(0);
  const [active, setActive] = useState(false);
  const delta = props.value / 10;
  const ref = createRef<HTMLParagraphElement>();

  function increment() {
    setI(x => {
      return x < props.value ? x + delta : props.value;
    });
  }

  function activate() {
    if (!active && inViewPort(ref.current.getBoundingClientRect())) {
      setActive(true);
      console.log("Activated");
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", activate);
    return () => document.removeEventListener("scroll", activate);
  });

  useEffect(() => {
    let handle = null;
    if (active) {
      handle = setInterval(increment, 100);
    }
    return () => clearInterval(handle);
  }, [active, props]);

  return (
    <p className={props.className} ref={ref}>
      {i.toFixed(props.fixedPoint || 0)}
    </p>
  );
};

function useIncrementingNumber(n: number) {
  const [i, setI] = useState(0);
  const delta = n / 10;

  let handle = null;

  function increment() {
    setI(x => {
      return x < n ? x + delta : n;
    });
  }

  function start() {
    handle = setInterval(increment, 100);
  }

  return [i, start];
}

export default StatNumber;
