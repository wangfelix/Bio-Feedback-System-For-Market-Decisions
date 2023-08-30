import { RootState } from "State/Reducers";

export const selectMe = ({ me }: RootState) => me;

export const selectMeId = ({ me }: RootState) => me.data._id;

export const selectMeEmail = ({ me }: RootState) => me.data.email;
