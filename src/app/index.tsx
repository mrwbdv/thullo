import React from "react";
// import { Button } from "../shared/atoms";
import { GlobalStyles } from "./global-styles";

// import { Pages } from "../pages";
import { HomePage } from "../pages/home";
//assets
// import logo from "../assets/images/musan-group-logo.svg";
// import { renderRoutes } from "react-router-config";
// import { ROUTES } from "../pages/routes";

export const App = () => {
    // const [count, setCount] = React.useState(0);
    return (
        <>
            <HomePage />
            <GlobalStyles />
            {/* <Pages /> */}
            {/* <img src={logo} alt="logo" />
            <div>Heffffffflooo</div>
            <div>{count}</div>
            <Button onClick={() => setCount(count + 1)}>Test Button</Button> */}
        </>
    );
};
