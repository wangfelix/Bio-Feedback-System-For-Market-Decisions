import React from "react";
import { ArrowCounterClockwise } from "phosphor-react";

import { PageLayout } from "Components/pageLayout";
import { Text } from "Components/text";
import { HistoryPageHistoryTable } from "Pages/HistoryPage/Components/HistoryTable/historyPageHistoryTable";
import { AccountAndHistoryPageDetailsPane } from "Pages/HistoryPage/Components/DetailsPane/historyDetailsPane";
import { Container } from "Components/container";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";

export const HistoryPage = () => {
    // -- STATE --

    // -- RENDER --

    return (
        <PageLayout
            layout="double-row"
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
                    <ArrowCounterClockwise color={Colors.GREEN_ACCENT} size={22} weight="bold" />
                </Container>
            }
            heading="Session History"
            headingContent={
                <Container>
                    <Text textType="text" styleProps={{ fontSize: "20px" }}>
                        Total Sessions: 62
                    </Text>
                </Container>
            }
            childrenLeft={HistoryPageHistoryTable()}
            childrenRight={AccountAndHistoryPageDetailsPane()}
        />
    );
};
