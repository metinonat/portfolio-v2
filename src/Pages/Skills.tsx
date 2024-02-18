import Fade from "react-awesome-reveal";
import { PROFILE } from "../utils/profile";
import { Skill, SkillWrapper } from "../types/profile";

export default function Skills(): JSX.Element {
  return (
    <>
      <div className="content-wrapper">
        <Fade>
          <div className="relative overflow-hidden lg:overflow-visible">
            {PROFILE.skills.map((skill: SkillWrapper) => (
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
                <div className="mx-auto text-2xl font-bold mt-10">
                  {skill.header}
                </div>
                <div
                  className="flex justify-center items-center mx-auto gap-x-5"
                  key={skill.header}
                >
                  {skill.items.map((item: Skill) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-y-2 text-center"
                    >
                      <img
                        className="h-12 w-12 m-2 mb-0"
                        src={item.icon}
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
}
