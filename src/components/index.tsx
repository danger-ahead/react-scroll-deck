/**
 * @module ReactScrollDeck
 * @description A component that displays a sliding UI . On clicking hover-based button, items slide to the left or right.
 * @returns {JSX.Element}
 * @author danger-ahead
 */

import React, { useRef, useState, useEffect } from "react";
import { ScrollDecksProps } from "./types";

import "../styles/styles.css";

export default function Component({
  children,
  showAHoverIcons = true,
  hoverIconSectionWidth = "3rem",
  arrowScrollAmount = 500,
  arrowScrollBehavior = "smooth",
  scrollContainerPadding = "0",
  scrollContainerPaddingOnScroll = "0",
  parentContainerPadding = "0",
  parentContainerPaddingOnScroll = "0",
  columnGap = "0rem",
  rowGap = "0rem",
  leftHoverIcon = <></>,
  rightHoverIcon = <></>,
  differentLayoutFormobileDevice = false,
  mobileDeviceBreakpointInPx = 640,
}: ScrollDecksProps) {
  const [hoverButtons, setHoverButtons] = useState<boolean>(false);

  const isEndReached = useRef<boolean>(false);

  const slidingCardsContainer = useRef<HTMLDivElement>(null);

  const [scrollContainerStyle, setScrollContainerStyle] =
    useState<React.CSSProperties>({});

  const [mobileDevice, setMobileDevice] = useState(false);

  function onMouseEnter() {
    setHoverButtons(true);
  }

  function onMouseLeave() {
    setHoverButtons(false);
  }

  function handleArrowClickLeft() {
    slidingCardsContainer.current?.scrollBy({
      left: -arrowScrollAmount!,
      behavior: arrowScrollBehavior,
    });
  }

  function handleArrowClickRight() {
    slidingCardsContainer.current?.scrollBy({
      left: arrowScrollAmount,
      behavior: arrowScrollBehavior,
    });
  }

  useEffect(() => {
    const container = slidingCardsContainer.current!;
    const handleScroll = () => {
      isEndReached.current =
        container.scrollLeft + container.clientWidth === container.scrollWidth;
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hoverButtons && isEndReached.current) {
      slidingCardsContainer.current?.scrollBy({
        left: 9000000,
      });
    }
  }, [hoverButtons]);

  const handleResize = () => {
    if (
      differentLayoutFormobileDevice &&
      window.innerWidth <= mobileDeviceBreakpointInPx
    ) {
      setScrollContainerStyle({
        flexDirection: "column",
        flexWrap: "nowrap",
      });
      setMobileDevice(true);
    } else {
      setScrollContainerStyle({});
      setMobileDevice(false);
    }
  };

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        padding: hoverButtons
          ? `${parentContainerPaddingOnScroll}`
          : `${parentContainerPadding}`,
      }}
      className="react_scroll_deck__component"
    >
      {showAHoverIcons && hoverButtons && !mobileDevice ? (
        <div
          style={{
            width: hoverIconSectionWidth,
          }}
          className="react_scroll_deck__hover_btns"
        >
          <button onClick={handleArrowClickLeft}>{leftHoverIcon}</button>
        </div>
      ) : null}
      <div
        ref={slidingCardsContainer}
        className="react_scroll_deck__container"
        style={{
          ...scrollContainerStyle,
          columnGap: columnGap,
          rowGap: rowGap,
          padding: hoverButtons
            ? `${scrollContainerPaddingOnScroll}`
            : `${scrollContainerPadding}`,
        }}
      >
        {children}
      </div>
      {showAHoverIcons && hoverButtons && !mobileDevice ? (
        <div
          style={{
            right: 0,
            width: hoverIconSectionWidth,
          }}
          className="react_scroll_deck__hover_btns"
        >
          <button onClick={handleArrowClickRight}>{rightHoverIcon}</button>
        </div>
      ) : null}
    </div>
  );
}
