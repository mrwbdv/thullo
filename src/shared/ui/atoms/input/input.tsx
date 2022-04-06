import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import { compose, space, SpaceProps } from "styled-system";

type InputProps = {
    autoComplete?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    value: string;
    variant?: "standard" | "outlined";
} & SpaceProps;

const defaultextStyles = {
    mt: 0,
    mb: 0,
    width: "100%",
    border: "none",
    outline: "none",
    transition: "0.35s",
    fontSize: 0,
    fontWeight: "medium",
    lineHeight: "copy",
    color: "text.disabled",
    background: "#fff",
    boxSizing: "border-box",
    borderColor: "#fff",
    borderRadius: 8,
    padding: "10px 15px",
};

// export const Input = ({
//     autoComplete,
//     disabled,
//     name,
//     onChange,
//     placeholder,
//     type,
//     value,
//     variant,
// }: InputProps) => (
//     <InputNative
//         autoComplete={autoComplete}
//         disabled={disabled}
//         name={name}
//         onChange={onChange}
//         placeholder={placeholder}
//         type={type}
//         value={value}
//         variant={variant}
//     />
// );

// filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
// border: 1px solid #e0e0e0;

// border-radius: 8px;
// padding: 10px 15px;

const textVariants = variant({
    variants: {
        outlined: {
            ...defaultextStyles,
            filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))",
            border: "1px solid #e0e0e0",
        },
        standard: {
            ...defaultextStyles,
        },
    },
});

export const Input = styled.input<InputProps>`
    ::placeholder {
        color: ${(props) => props.theme.colors.text.disabled};
    }
    ${textVariants}
    ${compose(space)}
`;
