import React from "react";
import { Button } from "../shared/atoms";
import { GlobalStyles } from "./global-styles";

//assets
import logo from "../assets/images/musan-group-logo.svg";

export const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <GlobalStyles />
            <img src={logo} alt="logo" />
            <div>{count}</div>
            <Button onClick={() => setCount(count + 1)}>Test Button</Button>
        </>
    );
};
