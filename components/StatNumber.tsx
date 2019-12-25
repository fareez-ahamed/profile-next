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

const StatNumber: React.FC<{ value: number; className?: string }> = props => {
  const [i, setI] = useState(0);
  const [active, setActive] = useState(false);
  const delta = props.value / 10;
  const ref = createRef<HTMLParagraphElement>();

  function increment() {
    setI(x => {
      return x < props.value ? Math.ceil(x + delta) : props.value;
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
      {i}
    </p>
  );
};

export default StatNumber;
