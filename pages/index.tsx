import Head from "next/head";
import Jumbo from "../components/Jumbo";
import data from "../data/data.json";
import AboutMe from "../components/AboutMe";
import StatNumber from "../components/StatNumber";
import Statistics from "../components/Statistics";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Social from "../components/Social";

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
    <Skills />
    <Education />
    <Experience />
    <Social />
  </div>
);

export default Home;
