import React from "react";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from "react-vis";

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
        experiment: "jsPsych – Risky Investment Task",
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
                overflow: "scroll",
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

            <Row styleProps={{ marginBottom: spacingDistance(2) }}>
                <Text styleProps={{ marginRight: spacingDistance(2), flexShrink: 0, marginTop: 5 }}>
                    Uploaded Files:
                </Text>

                <Container styleProps={{ width: percent(100), gap: spacingDistance(1) }}>
                    <Row
                        styleProps={{
                            background: Colors.GREY_LIGHT,
                            borderRadius: BORDER_RADIUS,
                            padding: spacingDistance(1),
                            width: percent(100),
                        }}
                    >
                        <Container>
                            <Text textType="nudge" styleProps={{ fontSize: 14 }}>
                                opensignals_0007804C285D_2023-07-02_13-48-34.txt
                            </Text>
                        </Container>
                    </Row>

                    <Row
                        styleProps={{
                            background: Colors.GREY_LIGHT,
                            borderRadius: BORDER_RADIUS,
                            padding: spacingDistance(1),
                            width: percent(100),
                        }}
                    >
                        <Container>
                            <Text textType="nudge" styleProps={{ fontSize: 14 }}>
                                opensignals_0007804C285D_2023-07-02_13-48-34.h5
                            </Text>
                        </Container>
                    </Row>
                </Container>
            </Row>

            <HistoryDetailsPaneSection heading="EDA Sensor">
                <XYPlot width={600} height={300}>
                    <HorizontalGridLines />
                    <LineSeries
                        data={[
                            { x: 0, y: 33128 },
                            { x: 1000, y: 32856 },
                            { x: 2000, y: 32560 },

                            { x: 3000, y: 32280 },
                            { x: 4000, y: 31986 },
                            { x: 5000, y: 31524 },
                            { x: 6000, y: 31368 },
                            { x: 7000, y: 30988 },
                            { x: 8000, y: 30988 },

                            { x: 9000, y: 30776 },
                            { x: 10000, y: 40248 },
                            { x: 11000, y: 40812 },
                            { x: 12000, y: 40944 },
                            { x: 13000, y: 40340 },
                            { x: 14000, y: 41312 },
                            { x: 15000, y: 46936 },
                            { x: 16000, y: 47852 },
                            { x: 17000, y: 49344 },
                            { x: 18000, y: 46892 },
                            { x: 19000, y: 44144 },
                            { x: 20000, y: 41068 },
                        ]}
                    />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </HistoryDetailsPaneSection>
        </Container>
    );
};
