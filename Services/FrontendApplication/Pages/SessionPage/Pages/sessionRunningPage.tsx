import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { Notebook } from "phosphor-react";

import { PageLayout } from "Components/pageLayout";
import { BORDER_RADIUS, Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { Text } from "Components/text";
import { Button } from "Components/Button/button";
import { Paths } from "Utils/paths";
import { SessionPagePaths } from "Pages/SessionPage/SessionPagePaths";
import Animation from "Illustrations/Lotties/animation_lkaabqti.json";
import { setSessionDuration } from "State/Actions/actionCreators";
import { useTypedDispatch } from "Utils/hooks";

export const SessionRunningPage = () => {
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();

    // -- STATE --

    const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);

    // -- HELPERS --

    const lottieOptions = {
        downArrowOptions: {
            animationData: Animation,
            loop: true,
            autoplay: true,
        },
    };

    // -- EFFECTS --

    useEffect(() => setSessionStartTime(new Date()), []);

    // -- CALLBACKS --

    const handleFinishSession = () => {
        const sessionEndTime = new Date();

        const durationInMillis = sessionEndTime.getTime() - sessionStartTime.getTime();
        const hours = Math.floor(durationInMillis / 3600000); // milliseconds in an hour
        const minutes = Math.floor((durationInMillis % 3600000) / 60000); // milliseconds in a minute
        const seconds = Math.floor((durationInMillis % 60000) / 1000); // milliseconds in a second

        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        const formattedDuration = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        dispatch(setSessionDuration(formattedDuration));

        navigate(`${Paths.SESSION_PAGE}${SessionPagePaths.FILE_UPLOAD}`);
    };

    // -- RENDER --

    return (
        <PageLayout
            heading="Session Page"
            icon={
                <Container
                    styleProps={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 32,
                        height: 32,
                        background: Colors.PRIMARY_ACCENT_HUE,
                        borderRadius: BORDER_RADIUS,
                    }}
                >
                    <Notebook color={Colors.GREEN_ACCENT} size={22} weight="bold" />
                </Container>
            }
        >
            <Container styleProps={{ width: percent(100), alignItems: "center" }}>
                <Row
                    styleProps={{
                        width: percent(100),
                        justifyContent: "center",
                        alignItems: "center",
                        gap: spacingDistance(4),
                        marginBottom: spacingDistance(2),
                    }}
                >
                    <Text styleProps={{ color: Colors.GREY }}>Configure</Text>-
                    <Text styleProps={{ color: Colors.BLUE_DARKEST }}>Execution</Text>-
                    <Text styleProps={{ color: Colors.GREY }}>File Upload</Text>
                </Row>

                <Lottie
                    options={lottieOptions.downArrowOptions}
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    isClickToPauseDisabled
                />

                <Container styleProps={{ width: percent(30), gap: spacingDistance(1) }}>
                    <Text textType="modal">
                        Your Session is running. Focus on your Experiment tasks. When you are done, click here.
                    </Text>

                    <Button buttonType="primary" onClickHandle={handleFinishSession}>
                        Finish Session
                    </Button>
                </Container>
            </Container>
        </PageLayout>
    );
};
