import Fade from "react-awesome-reveal";
import PROFILE from "../utils/profile";

export default function About(): JSX.Element {
  return (
    <>
      <div className="content-wrapper">
        <Fade>
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      About Me
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      {PROFILE.summary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-20 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[28rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
                  src={PROFILE.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
