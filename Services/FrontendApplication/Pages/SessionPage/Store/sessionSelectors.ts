import { RootState } from "State/Reducers";
import { Device } from "State/Reducers/sessionPageReducer";

export const selectSessionName = ({ sessionPage }: RootState) => sessionPage.name;

export const selectSessionExperiment = ({ sessionPage }: RootState) => sessionPage.experiment;

export const selectSessionDevice = ({ sessionPage }: RootState): Device => sessionPage.devices[0];

export const selectSessionDuration = ({ sessionPage }: RootState) => sessionPage.duration;
