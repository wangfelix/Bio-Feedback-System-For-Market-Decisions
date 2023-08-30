import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "Pages/LandingPage/landingPage";
import { HistoryPage } from "Pages/HistoryPage/historyPage";
import { AdminPage } from "Pages/AdminPage/adminPage";
import { SensorsAndDevicesPage } from "Pages/sensorsAndDevicesPage";
import { Paths } from "Utils/paths";
import { Page } from "Components/page";
import { store } from "State/store";
import { SessionRouter } from "Pages/SessionPage/sessionRouter";

const App = () => {
    // -- RENDER --

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Page>
                    <Routes>
                        <Route path={Paths.LANDING_PAGE} Component={LandingPage} />

                        <Route path={Paths.HISTORY_PAGE} Component={HistoryPage} />

                        <Route path={`${Paths.SESSION_PAGE}/*`} element={<SessionRouter />} />

                        <Route path={Paths.SENSORS_AND_DEVICES_PAGE} Component={SensorsAndDevicesPage} />

                        <Route path={Paths.ADMIN_PAGE} Component={AdminPage} />

                        <Route Component={ErrorPage} />
                    </Routes>
                </Page>
            </Provider>
        </BrowserRouter>
    );
};

const ErrorPage = () => <>404</>;

export default App;
