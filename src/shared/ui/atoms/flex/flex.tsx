import styled from "styled-components";
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
} from "styled-system";
import { Box } from "../box/box";

export type FlexProps = SpaceProps & LayoutProps & FlexboxProps & PositionProps;

export const Flex = styled(Box)<FlexProps>({
  display: "flex",
});
