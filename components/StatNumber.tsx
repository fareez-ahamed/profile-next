import { createRef } from "react";
import React from "react";
import { useIncrementingNumber, useScreenEnter } from "./common";

const StatNumber: React.FC<{
  value: number;
  className?: string;
  fixedPoint?: number;
}> = props => {
  const [i, start] = useIncrementingNumber(props.value);
  const ref = createRef<HTMLParagraphElement>();

  useScreenEnter(ref, () => start());

  return (
    <p className={props.className} ref={ref}>
      {i.toFixed(props.fixedPoint || 0)}
    </p>
  );
};

export default StatNumber;
