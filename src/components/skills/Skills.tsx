import { Marquee } from "../magicui/marquee";
import "./Skills.scss";

const logos = [
  [
    "/images/javascript.png",
    "/images/ts.png",
    "/images/sass.png",
    "https://www.svgrepo.com/show/355190/reactjs.svg",
    "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    "https://www.svgrepo.com/show/354521/vitejs.svg",
    "https://www.svgrepo.com/show/354522/visual-studio-code.svg",
    "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
    "https://www.svgrepo.com/show/355133/mysql.svg",
    "https://www.svgrepo.com/show/448221/docker.svg",
    "https://www.svgrepo.com/show/452210/git.svg",
    "https://www.svgrepo.com/show/452185/css-3.svg",
    "https://www.svgrepo.com/show/452184/csharp.svg",
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/354520/visual-studio.svg",
    "https://www.svgrepo.com/show/353935/jira.svg",
    "https://www.svgrepo.com/show/448226/gitlab.svg",
    "/icons/Github.svg",
    "https://www.svgrepo.com/show/354202/postman-icon.svg",
    "https://www.svgrepo.com/show/373644/graphql.svg",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://www.svgrepo.com/show/373712/json.svg",
  ],
  [
  ],
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <Marquee className="[--duration:20s]">
          {logos[0].map((logo, index) => (
            <img className="object-cover w-14 h-14" key={index} src={logo} alt={`Logo ${index}`} loading="lazy" />
          ))}
        </Marquee>
        {/* <div className="logos-slide">
        </div> */}
        {/* <div className="logos-slide logos-slide-copy">
          {logos[0].map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt={`Logo ${index + logos.length}`}
              loading="lazy"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
