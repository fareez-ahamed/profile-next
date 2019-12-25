import data from "../data/data.json";
import * as Icon from "react-feather";

const AboutMe: React.FC<{}> = props => (
  <section>
    <div className="container mx-auto p-16">
      <p className="font-disp font-semibold text-3xl mb-8">About Me</p>
      <p className="text-lg font-serif">{data.aboutMe}</p>
      <div className="flex flex-row mt-12 items-center font-disp">
        <Icon.MapPin className="mx-2" size={20} />
        <p className="text-lg font-serif">{data.location}</p>
      </div>
    </div>
  </section>
);

export default AboutMe;
