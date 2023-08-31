/**
 * This file contains global selectors that may be needed throughout the application.
 * Page specific selectors can be found in the store subdirectories of the pages themselves.
 * E.g. ./AdminPage/Store/adminPageSelectors
 */

import { RootState } from "State/Reducers";

export const selectMe = ({ me }: RootState) => me;

export const selectMeId = ({ me }: RootState) => me.data._id;

export const selectMeEmail = ({ me }: RootState) => me.data.email;

export const selectIsRegistrationModalOpen = ({ modals }: RootState) => modals.isRegistrationModalOpen;
