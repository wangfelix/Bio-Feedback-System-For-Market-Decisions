import React from "react";

import { Container } from "Components/container";
import { BORDER_RADIUS, Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Text } from "Components/text";
import { Row } from "Components/row";
import { HistoryDetailsPaneSection } from "Pages/HistoryPage/Components/DetailsPane/Components/historyDetailsPaneSection";

export const AccountAndHistoryPageDetailsPane = () => {
    // -- STATE --

    const sessionMetaData = {
        sensors: ["00:07:80:4C:28:5D", "00:07:80:4C:28:5D"],
        sessionDuration: "00:25h",
        experiment: "Economic Investment Simulation",
    };

    // -- RENDER --

    return (
        <Container
            styleProps={{
                background: Colors.PRIMARY_ACCENT_HUE,
                width: "95%",
                height: "95%",
                justifySelf: "center",
                alignSelf: "center",
                margin: "auto",
                borderRadius: BORDER_RADIUS,
                boxShadow: "0 5px 20px 2px rgba(20, 0, 20, 0.3)",
                padding: "30px",
            }}
        >
            <Container styleProps={{ alignItems: "center" }}>
                <Text textType="text">Session 02</Text>
            </Container>

            {/* -- Header -- */}

            <Row
                styleProps={{
                    justifySelf: "center",
                    width: "98%",
                    height: "80px",
                    alignItems: "flex-end",
                    padding: "0 10px 10px 10px",
                    justifyContent: "space-between",
                    borderBottom: `solid 2px ${Colors.WHITE_OFF_WHITE}`,
                    marginBottom: spacingDistance(2),
                }}
            >
                <Text textType="text" styleProps={{ fontWeight: "bold", fontSize: "20px" }}>
                    KD2 Lab First Trial Session
                </Text>

                <Text textType="text">24.08.2020</Text>
            </Row>

            <HistoryDetailsPaneSection heading="Meta Data" styleProps={{ marginBottom: spacingDistance(2) }}>
                <Container>
                    <Row>
                        <Container styleProps={{ width: "200px" }}>
                            <Text>Sensors</Text>
                        </Container>

                        <Row styleProps={{ gap: spacingDistance(2) }}>
                            {sessionMetaData.sensors.map((sensor) => (
                                <Container
                                    styleProps={{
                                        background: Colors.GREY_LIGHT,
                                        borderRadius: 25,
                                        padding: `0 ${spacingDistance(1)}`,
                                    }}
                                >
                                    <Text>{sensor}</Text>
                                </Container>
                            ))}
                        </Row>
                    </Row>

                    <Row>
                        <Container styleProps={{ width: "200px" }}>
                            <Text>Session Duration</Text>
                        </Container>

                        <Container
                            styleProps={{
                                padding: `0 ${spacingDistance(1)}`,
                            }}
                        >
                            <Text>{sessionMetaData.sessionDuration}</Text>
                        </Container>
                    </Row>

                    <Row>
                        <Container styleProps={{ width: "200px" }}>
                            <Text>Experiment</Text>
                        </Container>

                        <Container
                            styleProps={{
                                padding: `0 ${spacingDistance(1)}`,
                            }}
                        >
                            <Text>{sessionMetaData.experiment}</Text>
                        </Container>
                    </Row>
                </Container>
            </HistoryDetailsPaneSection>

            <HistoryDetailsPaneSection heading="EDA Sensor">Content: Content</HistoryDetailsPaneSection>
        </Container>
    );
};
