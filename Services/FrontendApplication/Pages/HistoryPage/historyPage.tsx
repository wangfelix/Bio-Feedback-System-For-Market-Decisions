import React, { useEffect } from "react";

import { PageLayout } from "Components/pageLayout";
import cross from "Illustrations/crossing.png";
import { Text } from "Components/text";
import { HistoryPageHistoryTable } from "Pages/HistoryPage/Components/HistoryTable/historyPageHistoryTable";
import { AccountAndHistoryPageDetailsPane } from "Pages/HistoryPage/Components/DetailsPane/historyDetailsPane";
import { Container } from "Components/container";

export const HistoryPage = () => {
    // -- STATE --

    // -- RENDER --

    return (
        <PageLayout
            layout="double-row"
            icon={cross}
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
