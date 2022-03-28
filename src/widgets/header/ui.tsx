import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Logo } from "../../shared/ui/atoms/icons/icons";
import { Text } from "../../shared/ui/atoms";
// import { SearchBar } from "../../shared/organisms";

export const Header = () => (
    <HeaderContainer>
        <LogoLink to="/">
            <Logo />
            <Text variant="caption" ml={12}>
                Thullo
            </Text>
        </LogoLink>
        {/* <SearchBar
            name="search"
            onChange={() => console.log("text")}
            type="text"
            value=""
            placeholder="Keyword..."
        /> */}
    </HeaderContainer>
);

const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    padding: 0 25px;
    min-height: 70px;
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

// const Text = styled.p`
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 27px;
//     color: #333;
// `;
