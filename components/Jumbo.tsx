import data from "../data/data.json";

const Jumbo: React.FC<{}> = props => (
  <section
    className="min-h-screen bg-cover text-white flex items-stretch"
    style={{ backgroundImage: `url(${data.jumboImage})` }}
  >
    <div className="container flex flex-col mx-auto items-center justify-center">
      <p className="text-6xl font-bold font-disp">{data.name}</p>
      <p
        className="text-3xl font-disp font-light uppercase"
        style={{ letterSpacing: "0.3rem" }}
      >
        {data.title}
      </p>
    </div>
  </section>
);

export default Jumbo;
