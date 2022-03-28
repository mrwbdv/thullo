import styled from "styled-components";
import {
  compose,
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

export type BoxProps = SpaceProps & LayoutProps & FlexboxProps;

export const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(space, layout, flexbox)
);
