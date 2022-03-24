import React from "react";
import { Button, Input } from "../../atoms";
import styled from "styled-components";

export const SearchBar = ({ onClick, ...props }: any) => (
  <InputContainer>
    <Input {...props} />
    <Button>Search</Button>
  </InputContainer>
);

const InputContainer = styled.div`
    width: 280px;
    border-radius: 8px;
    border: transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 15px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;
