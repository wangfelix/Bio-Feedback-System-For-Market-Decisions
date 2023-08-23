export enum ActionType {
    // -- MODALS --

    SET_IS_REGISTRATION_MODAL_OPEN = "setIsRegistrationModalOpen",
    SET_IS_REGISTRATION_MODAL_STATE = "setRegistrationModalState",

    // -- ME --

    SET_ME_IS_LOGGED_IN = "setMeIsLoggedIn",
    SET_ME_IS_LOGGED_OUT = "setMeIsLoggedOut",

    // -- ADMIN --

    SET_USERS = "adminSetUsers",

    // -- SESSION --

    SET_DEVICES = "setDevices",
    SET_FIRST_DEVICE_FILE = "setFirstDeviceFile",
    SET_EXPERIMENT = "setExperiment",
    SET_EXPERIMENT_FILE = "setExperimentFile",
    SET_SESSION_NAME = "setSessionName",
}
