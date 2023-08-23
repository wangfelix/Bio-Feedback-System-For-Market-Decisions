import React from "react";
import { Route, Routes } from "react-router-dom";

import { SessionPagePaths } from "Pages/SessionPage/SessionPagePaths";
import { SessionConfigPage } from "Pages/SessionPage/Pages/sessionConfigPage";
import { SessionRunningPage } from "Pages/SessionPage/Pages/sessionRunningPage";
import { SessionFileUploadPage } from "Pages/SessionPage/Pages/sessionFileUploadPage";

export const SessionRouter = () => (
    <Routes>
        <Route path={`${SessionPagePaths.SETUP}`} Component={SessionConfigPage} />

        <Route path={`${SessionPagePaths.RUNNING}`} Component={SessionRunningPage} />

        <Route path={`${SessionPagePaths.FILE_UPLOAD}`} Component={SessionFileUploadPage} />
    </Routes>
);
