import styled from "styled-components";

import { compose, space, SpaceProps } from "styled-system";
import { variant } from "styled-system";

export type TextProps = {
  variant: "body" | "caption" | "hint" | "label";
} & SpaceProps;

const defaultextStyles = {
  // fontFamily: 'body',
  fontWeight: "medium",
  lineHeight: "copy",
  color: "text.primary",
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 4,
      fontFamily: "heading",
    },
    hint: {
      ...defaultextStyles,
      fontSize: 0,
    },
    label: {
      ...defaultextStyles,
      fontFamily: "heading",
      fontSize: 1,
      fontWeight: "medium",
    },
  },
});

export const Text = styled.p<TextProps>`
    ${textVariants}
    ${compose(space)}
`;
