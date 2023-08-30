export type ApiPostTrackSessionRequestBody = {
    userId: string;
    sessionName: string;
    sensorName: string;
    sensorId: string;
    sensorFilePath: string;
    duration: string;
    experimentAlias: string;
    experimentId: string;
    experimentFilePath: string;
};
