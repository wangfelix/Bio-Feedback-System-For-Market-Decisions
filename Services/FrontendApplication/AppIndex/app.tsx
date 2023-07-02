import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "Pages/landingPage";
import { HistoryPage } from "Pages/historyPage";
import { LiveFeedPage } from "Pages/liveFeedPage";
import { AdminPage } from "Pages/adminPage";
import { SensorsAndDevicesPage } from "Pages/sensorsAndDevicesPage";
import { Paths } from "Utils/paths";
import { BasePage } from "Components/page";

const App = () => {
    return (
        <BrowserRouter>
            <BasePage>
                <Routes>
                    <Route path={Paths.LANDING_PAGE} Component={LandingPage} />

                    <Route path={Paths.HISTORY_PAGE} Component={HistoryPage} />

                    <Route path={Paths.LIVE_FEED_PAGE} Component={LiveFeedPage} />

                    <Route path={Paths.SENSORS_AND_DEVICES_PAGE} Component={SensorsAndDevicesPage} />

                    <Route path={Paths.ADMIN_PAGE} Component={AdminPage} />

                    <Route Component={ErrorPage} />
                </Routes>
            </BasePage>
        </BrowserRouter>
    );
};

const ErrorPage = () => <>404</>;

export default App;
