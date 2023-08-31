export type ApiGetSessionsResponseBodyType = {
    sessions: {
        duration: string;
        experimentAlias: string;
        experimentFilePath: string;
        experimentId: string;
        name: string;
        sensorFilePath: string;
        sensorId: string;
        sensorName: string;
        userId: string;
        _id: string;
    }[];
};
