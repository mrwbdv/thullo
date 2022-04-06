// import styled from "styled-components";

// export const Button = styled.button<any>`

// `;

import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";

import { Flex } from "../flex/flex";
import { Box, BoxProps } from "../box/box";

export type StyledButtonProps = {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    variant?: "transparent" | "primary" | "secondary";
};

const buttonVariants = variant({
    variants: {
        primary: {
            backgroundColor: "brand.primary",
        },
        secondary: {
            backgroundColor: "brand.secondary",
            color: "text.secondary",
            fontSize: "12px",
        },
        transparent: {
            backgroundColor: "transparent",
            color: "text.secondary",
        },
    },
});

const StyledButton = styled.button<StyledButtonProps>`
    font-weight: 500;
    font-size: 10px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: -0.035em;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 7px 20px;
    ${buttonVariants}
`;

const ButtonIcon = styled(Box)<BoxProps>`
    svg {
        display: block;
    }
`;

export const Button = ({ leftIcon, rightIcon, children, ...props }: any) => (
    <StyledButton {...props}>
        <Flex alignItems="center" justifyContent="space-between">
            {leftIcon && (
                <ButtonIcon ml={2} mr={2}>
                    {leftIcon}
                </ButtonIcon>
            )}
            {children}
            {rightIcon && (
                <ButtonIcon ml={2} mr={2}>
                    {rightIcon}
                </ButtonIcon>
            )}
        </Flex>
    </StyledButton>
);

Button.defaultProps = {
    variant: "primary",
};
