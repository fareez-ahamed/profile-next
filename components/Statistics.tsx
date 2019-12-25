import StatNumber from "./StatNumber";
import data from "../data/data.json";

const Statistics: React.FC<{}> = props => (
  <section className="bg-gray-200">
    <div className="container mx-auto md:p-16 p-8 flex justify-around">
      {data.stats.map(stat => (
        <StatBox {...stat} />
      ))}
    </div>
  </section>
);

const StatBox: React.FC<{ value: number; text: string }> = props => (
  <div className="flex-col items-center" style={{ minWidth: "12rem" }}>
    <StatNumber
      className="font-bold font-sans text-6xl mb-2 text-center"
      value={props.value}
    />
    <p className="font-condensed uppercase text-center">{props.text}</p>
  </div>
);

export default Statistics;
