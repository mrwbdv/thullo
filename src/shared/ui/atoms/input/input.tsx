import React from "react";
import styled from "styled-components";

interface InputProps {
  autoComplete?: string;
  disabled?: boolean;
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  value: string;
}

export const Input = ({
  autoComplete,
  disabled,
  name,
  onChange,
  placeholder,
  type,
  value,
}: InputProps) => (
  // <InputContainer>
  <InputNative
    autoComplete={autoComplete}
    disabled={disabled}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
  />
  // </InputContainer>
);

const InputNative = styled.input`
    width: 100%;
    border: none;
    outline: none;
    transition: 0.35s;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #bdbdbd;
    :hover {
    }
    :focus {
    }
    ::placeholder {
        color: #bdbdbd;
    }
`;

const InputContainer = styled.div`
    border-radius: 8px;
    border: transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;
