import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import("./components").then(({ default: Component }) => {
  const Demo = () => (
    <>
      <Component
        columnGap="1rem"
        scrollContainerPadding="0 1rem 0 1rem"
        scrollContainerPaddingOnScroll="0 4.5rem 0 4.5rem"
        hoverIconSectionWidth="5rem"
        leftHoverIcon={<div className="demo__deck_hover_icons">{"<"}</div>}
        rightHoverIcon={<div className="demo__deck_hover_icons">{">"}</div>}
      >
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Jess Loiterton from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg"
          alt="Photo by Joyston Judah from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Sem Steenbergen from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Trace Hudson from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Mathias Reding from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Luis Dalvan from Pexels"
        />
      </Component>
      <Component
        columnGap="1rem"
        rowGap="1rem"
        scrollContainerPadding="0 1rem 0 1rem"
        scrollContainerPaddingOnScroll="0 1rem 0 1rem"
        hoverIconSectionWidth="5rem"
        leftHoverIcon={<div className="demo__deck_hover_icons">{"<"}</div>}
        rightHoverIcon={<div className="demo__deck_hover_icons">{">"}</div>}
        differentLayoutFormobileDevice={true}
      >
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Jess Loiterton from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg"
          alt="Photo by Joyston Judah from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Sem Steenbergen from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Trace Hudson from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Mathias Reding from Pexels"
        />
        <img
          className="demo__deck_image"
          src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo by Luis Dalvan from Pexels"
        />
      </Component>
    </>
  );
  ReactDOM.createRoot(document.getElementById("demo")!).render(
    <React.StrictMode>
      <div className="demo__container">
        <Demo />
      </div>
    </React.StrictMode>,
  );
});
