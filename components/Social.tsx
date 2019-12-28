import * as Icon from "react-feather";
import data from "../data/data.json";

const Button: React.FC<{ href: string }> = props => (
  <a
    className="rounded-full bg-gray-900 flex items-center justify-center md:m-8 m-2 p-4 hover:bg-gray-300 hover:text-black"
    style={{
      transition: "all 200ms",
      transitionTimingFunction: "linear"
    }}
    href={props.href}
  >
    {props.children}
  </a>
);

const Social: React.FC<{}> = props => (
  <section className="bg-black text-white">
    <div className="container mx-auto md:p-16 p-8 flex flex-wrap justify-center">
      <Button href={data.social.email}>
        <Icon.Mail />
      </Button>
      <Button href={data.social.facebook}>
        <Icon.Facebook />
      </Button>
      <Button href={data.social.twitter}>
        <Icon.Twitter />
      </Button>
      <Button href={data.social.linkedIn}>
        <Icon.Linkedin />
      </Button>
      <Button href={data.social.instagram}>
        <Icon.Instagram />
      </Button>
    </div>
  </section>
);

export default Social;
