import Typewriter from "typewriter-effect";
import Fade from "react-awesome-reveal";
import Social from "../components/Social";
import { MY_NAME, ROLES } from "../utils/constants";

export default function Home(): JSX.Element {
  return (
    <Fade>
      <div className="content-wrapper">
        <div className="h-full flex flex-col justify-center items-center gap-y-5 mt-20">
          <h1 className="text-5x1 font-bold text-7xl">{MY_NAME}</h1>
          <div className="flex flex-row text-xl mt-10">
            <div className="inline-block">I&apos;m&nbsp;</div>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: ROLES,
              }}
            />
          </div>
          <div className="mt-20">
            <Social />
          </div>
        </div>
      </div>
    </Fade>
  );
}
