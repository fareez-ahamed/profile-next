import Head from "next/head";
import Jumbo from "../components/Jumbo";
import data from "../data/data.json";
import AboutMe from "../components/AboutMe";

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
  </div>
);

export default Home;
