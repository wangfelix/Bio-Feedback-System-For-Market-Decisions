export type RegistrationFormState = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
};

export type HandleInputChange = <TKey extends keyof RegistrationFormState>(
    value: RegistrationFormState[TKey],
    formState?: Partial<RegistrationFormState>
) => void;
