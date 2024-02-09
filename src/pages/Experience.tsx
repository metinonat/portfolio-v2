import { useEffect, useState } from "react";
import Fade from "react-awesome-reveal";
import { Chrono } from "react-chrono";
import PROFILE from "@/utils/profile";

export default function Experience(): JSX.Element {
  const [width, setWidth] = useState("50vw");

  useEffect(() => {
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
              items={PROFILE.experiences}
              mode="VERTICAL"
              mediaHeight={100}
              itemWidth={150}
              timelinePointDimension={30}
              mediaSettings={{ align: "left", imageFit: "contain" }}
              classNames={{
                card: "bg-white shadow-lg",
                cardSubTitle: "text-black italic",
                cardText: "text-black",
              }}
              theme={{
                cardTitleColor: "black",
                cardMediaBgColor: "white",
                titleColorActive: "black",
              }}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
