import React from "react";

import { Row } from "Components/row";
import { Container } from "Components/container";
import { Colors, Z_INDEX } from "Utils/globalStyles";
import { Text } from "Components/text";
import { HistoryPageHistoryTableTableRow } from "Pages/HistoryPage/Components/HistoryTable/Components/historyPageHistoryTableTableRow";

export const HistoryPageHistoryTable = () => {
    // -- HELPER --

    const tableTitles = ["Date", "Session Alias", "Sensors", "Eperiment Type"];

    // -- RENDER --

    return (
        <>
            {/* Table Header */}

            <Row
                styleProps={{
                    width: "100%",
                    zIndex: Z_INDEX.CARD,
                    boxShadow: "0 5px 5px -5px #777",
                    height: "60px",
                    justifyContent: "center",
                }}
            >
                <Row
                    styleProps={{
                        alignSelf: "center",
                        width: "93%",
                        display: "grid",
                        gridTemplateColumns: "150px 200px 150px 1fr",
                        margin: "25px 0",
                        position: "relative",
                        right: "10px",
                    }}
                >
                    {tableTitles.map((title) => (
                        <Text textType="text" styleProps={{ fontSize: "15px", color: Colors.PRIMARY_ACCENT_BLUE_HUE }}>
                            {title}
                        </Text>
                    ))}
                </Row>
            </Row>

            {/* Table Rows */}

            <Container
                styleProps={{
                    width: "97%",
                    alignSelf: "flex-end",
                    overflowY: "auto",
                    padding: "20px 0",
                    margin: "0 5px 10px 0",
                    position: "absolute",
                    top: 60,
                    bottom: 0,
                }}
            >
                {testData.map((data) => (
                    <HistoryPageHistoryTableTableRow
                        sessionAlias={data.sessionAlias}
                        date={data.date}
                        sensors={data.sensors}
                        experimentTitle={data.experimentTitle}
                        isSelected={data.isSelected}
                    />
                ))}
            </Container>
        </>
    );
};

// Test Data
const testData = [
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "KD2 Lab Test",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Test 01",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Test 02",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Experiment",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: true,
        sessionAlias: "KD2 Lab First Trial Session",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Testing EDA Sensors",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Testing EDA Sensors",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Test 03",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Test 04",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Random Test",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Max Trial Run",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Alessa Trial Run",
    },
    {
        date: "16.12.2017",
        sensors: 185,
        experimentTitle: "jsPsych – Risky Investment Task" + "",
        isSelected: false,
        sessionAlias: "Trial Run",
    },
];
