import { RootState } from "State/Reducers";

export const selectSessions = ({ adminPage }: RootState) => adminPage.sessions;
