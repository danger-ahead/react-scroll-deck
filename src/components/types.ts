export interface ScrollDecksProps {
  children: React.ReactNode;

  // show hover icons
  showAHoverIcons?: boolean;
  hoverIconSectionWidth?: string;
  leftHoverIcon?: React.ReactNode;
  rightHoverIcon?: React.ReactNode;

  arrowScrollAmount?: number;
  arrowScrollBehavior?: "smooth" | "auto";

  scrollContainerPadding?: string;
  scrollContainerPaddingOnScroll?: string;

  parentContainerPadding?: string;
  parentContainerPaddingOnScroll?: string;

  // gap between items
  rowGap?: string;
  columnGap?: string;

  differentLayoutFormobileDevice?: boolean;
  mobileDeviceBreakpointInPx?: number;
}
