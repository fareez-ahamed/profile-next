import Head from "next/head";
import Jumbo from "../components/Jumbo";
import data from "../data/data.json";
import AboutMe from "../components/AboutMe";
import StatNumber from "../components/StatNumber";
import Statistics from "../components/Statistics";

const Home: React.FC<{}> = props => (
  <div>
    <Head>
      <title>
        {data.name} - {data.title}
      </title>
      <link href="/styles.css" rel="stylesheet" />
    </Head>
    <Jumbo />
    <AboutMe />
    <Statistics />
  </div>
);

export default Home;
