import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import Fade from "react-awesome-reveal";
import PROFILE from "@/utils/profile";

export default function Education(): JSX.Element {
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");

  useEffect(() => {
    if (window?.innerWidth < 576) {
      setMode("VERTICAL");
    }
    if (window?.innerWidth < 576) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth("75vw");
    } else {
      setWidth("50vw");
    }
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <Fade>
          <div style={{ width }} className="mx-auto">
            <Chrono
              hideControls
              allowDynamicUpdate
              useReadMore={false}
              items={PROFILE.education}
              cardHeight={250}
              mode={mode}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
