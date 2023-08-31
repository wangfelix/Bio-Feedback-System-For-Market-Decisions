import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notebook } from "phosphor-react";
import { useSelector } from "react-redux";
import { Input, InputLabel } from "@mui/material";

import { PageLayout } from "Components/pageLayout";
import { BORDER_RADIUS, Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { Text } from "Components/text";
import { Button } from "Components/Button/button";
import { Paths } from "Utils/paths";
import {
    selectSessionDevice,
    selectSessionDuration,
    selectSessionExperiment,
    selectSessionName,
} from "Pages/SessionPage/Store/sessionSelectors";
import { setExperimentFile, setFirstDeviceFile } from "State/Actions/actionCreators";
import { apiPostTrackSession } from "Api/requests";
import { selectMeId } from "State/globalSelectors";
import { useTypedDispatch } from "Utils/hooks";

export const SessionFileUploadPage = () => {
    const navigate = useNavigate();

    const dispatch = useTypedDispatch();

    // -- STATE --

    const [isExperimentFileUploaded, setIsExperimentFileUploaded] = useState(false);
    const [isSensorFileUploaded, setIsSensorFileUploaded] = useState(false);

    const userId = useSelector(selectMeId);
    const sessionName = useSelector(selectSessionName);
    const sessionExperiment = useSelector(selectSessionExperiment);
    const sessionDevice = useSelector(selectSessionDevice);
    const sessionDuration = useSelector(selectSessionDuration);

    // -- CALLBACKS --

    const onSensorInputChange = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setIsSensorFileUploaded(true);

            dispatch(setFirstDeviceFile((event.target as HTMLInputElement)?.value));
        },
        [setIsSensorFileUploaded, setFirstDeviceFile, dispatch]
    );

    const onExperimentFileInputChange = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setIsExperimentFileUploaded(true);

            dispatch(setExperimentFile(event.target.value));
        },
        [setIsExperimentFileUploaded, setExperimentFile, dispatch]
    );

    const handleFinishSession = () => {
        apiPostTrackSession({
            userId: userId,
            sessionName: sessionName,
            sensorName: sessionDevice.alias,
            sensorId: sessionDevice.id,
            sensorFilePath: sessionDevice.fileName,
            duration: sessionDuration,
            experimentAlias: sessionExperiment.alias,
            experimentId: sessionExperiment.id,
            experimentFilePath: sessionExperiment.fileName,
        })
            .then(() => navigate(`${Paths.HISTORY_PAGE}`))
            .catch((e) => console.log(e));
    };

    // -- RENDER --

    const styles = {
        hidden: {
            display: "none",
        },
        importLabel: {
            color: "black",
        },
    };

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
                    <Text styleProps={{ color: Colors.GREY }}>Execution</Text>-
                    <Text styleProps={{ color: Colors.BLUE_DARKEST }}>File Upload</Text>
                </Row>

                <Container styleProps={{ width: percent(50) }}>
                    <Text
                        styleProps={{ fontSize: 18, marginBottom: spacingDistance(2) }}
                    >{`Upload Files for session: ${sessionName}`}</Text>

                    <Row
                        styleProps={{
                            gap: spacingDistance(2),
                            alignItems: "center",
                            marginBottom: spacingDistance(1),
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>Session Duration</Text>

                        <Text>{sessionDuration}</Text>
                    </Row>

                    <Row
                        styleProps={{
                            gap: spacingDistance(2),
                            alignItems: "center",
                            marginBottom: spacingDistance(1),
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>{sessionExperiment.alias}</Text>

                        <Container
                            styleProps={{
                                background: Colors.GREY_LIGHT,
                                borderRadius: BORDER_RADIUS,
                                padding: spacingDistance(1),
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                        >
                            <InputLabel htmlFor="import-button" style={styles.importLabel}>
                                <Input
                                    id="import-button"
                                    inputProps={{
                                        accept: ".json, .txt, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                                    }}
                                    onChange={onExperimentFileInputChange}
                                    style={styles.hidden}
                                    type="file"
                                />
                                Import File
                            </InputLabel>
                        </Container>
                    </Row>

                    <Row
                        styleProps={{
                            gap: spacingDistance(2),
                            alignItems: "center",
                            marginBottom: spacingDistance(2),
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>{sessionDevice.alias}</Text>

                        <Container
                            styleProps={{
                                background: Colors.GREY_LIGHT,
                                borderRadius: BORDER_RADIUS,
                                padding: spacingDistance(1),
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                        >
                            <InputLabel htmlFor="import-button2" style={styles.importLabel}>
                                <Input
                                    id="import-button2"
                                    inputProps={{
                                        accept: ".txt, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                                    }}
                                    onChange={(event) => onSensorInputChange(event)}
                                    style={styles.hidden}
                                    type="file"
                                />
                                Import File
                            </InputLabel>
                        </Container>
                    </Row>

                    <Container styleProps={{ width: percent(100), alignItems: "end" }}>
                        <Button
                            buttonType={
                                isExperimentFileUploaded && isSensorFileUploaded ? "primary" : "primaryGreyedOut"
                            }
                            onClickHandle={handleFinishSession}
                            styleProps={{ flexGrow: 0 }}
                        >
                            Finish
                        </Button>
                    </Container>
                </Container>
            </Container>
        </PageLayout>
    );
};
