import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Notebook } from "phosphor-react";

import { PageLayout } from "Components/pageLayout";
import { BORDER_RADIUS, Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { Text } from "Components/text";
import { Button } from "Components/Button/button";
import { Paths } from "Utils/paths";
import { SessionPagePaths } from "Pages/SessionPage/SessionPagePaths";
import { Device, Experiment } from "State/Reducers/sessionPageReducer";
import {
    setDevices,
    setExperiment as setSessionExperiment,
    setSessionName as setSessionSessionName,
} from "State/Actions/actionCreators";
import { TextInput } from "Components/textInput";
import { InputWrapper } from "Components/inputWrapper";
import { useAppDispatch } from "Utils/hooks";

const SENSORS_MOCK: Device[] = [
    { alias: "EDA Sensor 01", id: "eda_01" },
    { alias: "EDA Sensor 02", id: "eda_02" },
    { alias: "ECG Sensor 01", id: "ecg_01" },
];

const EXPERIMENTS_MOCK: Experiment[] = [
    { alias: "jsPsych – Risky Investment Task", id: "jsPsych – Risky Investment Task" },
];

export const SessionConfigPage = () => {
    const dispatch = useAppDispatch();

    // -- STATE --

    const [sessionName, setSessionName] = React.useState("");

    const [experiment, setExperiment] = React.useState<"" | any>("");

    const [selectedSensor, setSelectedSensor] = React.useState<"" | any>("");

    const navigate = useNavigate();

    // -- CALLBACKS --

    const handleChangeSessionName = useCallback((value: any) => setSessionName(value), [setSessionName]);

    const handleChangeExperiment = useCallback(
        (event: SelectChangeEvent) => {
            setExperiment(event.target.value);

            const experiment = EXPERIMENTS_MOCK.filter((experient) => experient.id === event.target.value)[0];
            dispatch(setSessionExperiment(experiment));
        },
        [setExperiment]
    );

    const handleChangeSensor = useCallback(
        (event: SelectChangeEvent) => {
            setSelectedSensor(event.target.value);

            const sensor = SENSORS_MOCK.filter((sensor) => sensor.id === event.target.value)[0];
            dispatch(setDevices([sensor]));
        },
        [dispatch, setDevices, setSelectedSensor]
    );

    const handleStartSession = () => {
        dispatch(setSessionSessionName(sessionName));
        navigate(`${Paths.SESSION_PAGE}${SessionPagePaths.RUNNING}`);
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
                    <Text styleProps={{ color: Colors.BLUE_DARKEST }}>Configure</Text>-
                    <Text styleProps={{ color: Colors.GREY }}>Execution</Text>-
                    <Text styleProps={{ color: Colors.GREY }}>File Upload</Text>
                </Row>

                <Container styleProps={{ width: percent(40) }}>
                    <InputWrapper label="Session Alias">
                        <TextInput
                            value={sessionName}
                            onValueChange={handleChangeSessionName}
                            placeholder="Choose a name for this session"
                        />
                    </InputWrapper>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Experiment Type</InputLabel>

                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Experiment Type"
                            onChange={handleChangeExperiment}
                            style={{ marginBottom: spacingDistance(1) }}
                            value={experiment}
                        >
                            <MenuItem value="jsPsych – Risky Investment Task">jsPsych – Risky Investment Task</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginBottom: spacingDistance(3) }}>
                        <InputLabel id="demo-select-small-label">Sensor</InputLabel>

                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Sensor"
                            onChange={handleChangeSensor}
                            value={selectedSensor}
                        >
                            {SENSORS_MOCK.map((sensor) => (
                                <MenuItem value={sensor.id}>{sensor.alias}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button buttonType="primary" onClickHandle={handleStartSession}>
                        Start Session
                    </Button>
                </Container>
            </Container>
        </PageLayout>
    );
};
