import data from "../data/data.json";
import React, { createRef } from "react";
import { useScreenEnter, useIncrementingNumber } from "./common";

const Skills: React.FC<{}> = props => (
  <section className="bg-black text-white">
    <div className="container mx-auto md:p-16 p-8 flex flex-col items-stretch">
      <p className="font-condensed font-bold text-4xl mb-8">Skills</p>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "auto",
          gridGap: "1.50rem"
        }}
      >
        {data.skills.map((skill, i) => (
          <React.Fragment key={i}>
            <p className="text-lg font-medium text-right">{skill.name}</p>
            <SkillLevel value={skill.percentage} />
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const SkillLevel: React.FC<{ value: number }> = props => {
  const [i, start] = useIncrementingNumber(props.value);
  const ref = createRef<HTMLDivElement>();
  useScreenEnter(ref, () => start());
  return (
    <div className="h-8 bg-gray-900 rounded" ref={ref}>
      <div
        className="h-full bg-green-500 rounded-l"
        style={{
          width: i + "%",
          transitionProperty: "width",
          transitionDuration: "1s"
        }}
      ></div>
    </div>
  );
};

export default Skills;
