import * as Icon from "react-feather";
import data from "../data/data.json";
import { type } from "os";

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

type SocialData = {
  facebook?: string;
  twitter?: string;
  email?: string;
  linkedIn?: string;
  instagram?: string;
};

const Social: React.FC<{}> = props => {
  const social = data.social;
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto md:p-16 p-8 flex flex-wrap justify-center">
        {social.email && (
          <Button href={`mailto:${social.email}`}>
            <Icon.Mail />
          </Button>
        )}

        {social.facebook && (
          <Button href={social.facebook}>
            <Icon.Facebook />
          </Button>
        )}

        {social.twitter && (
          <Button href={social.twitter}>
            <Icon.Twitter />
          </Button>
        )}

        {social.linkedIn && (
          <Button href={social.linkedIn}>
            <Icon.Linkedin />
          </Button>
        )}

        {social.instagram && (
          <Button href={social.instagram}>
            <Icon.Instagram />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Social;
