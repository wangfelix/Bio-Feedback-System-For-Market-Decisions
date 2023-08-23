import { RootState } from "State/Reducers";

export const selectSessionName = ({ sessionPage }: RootState) => sessionPage.name;

export const selectSessionExperiment = ({ sessionPage }: RootState) => sessionPage.experiment;

export const selectSessionDevice = ({ sessionPage }: RootState) => sessionPage.devices[0];
