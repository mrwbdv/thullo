import React from "react";
import { Button, Input } from "@shared/ui/atoms";
import styled from "styled-components";

export const SearchBar = ({ onClick, ...props }: any) => (
    <SearchBarContianer>
        <Input placeholder="Search" variant="standard" {...props} />
        <Button onClick={onClick} variant="primary">
            Search
        </Button>
    </SearchBarContianer>
);

const SearchBarContianer = styled.div`
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fff;
    padding: 0 2px;
`;
