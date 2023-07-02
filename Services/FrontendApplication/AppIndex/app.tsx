import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { LandingPage } from "Pages/landingPage";

const App = () => {
    return (
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
};
export default App;
