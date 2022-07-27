export interface FormFields {
    generic: Field[];
    custom?: any;
    fieldsOrder: string[];
}

// export interface CustomFields {
//     [store: string]: Field[];
// }

export interface Field {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    validationType: string;
    value: string;
    validations: Validation[];
}

export interface Validation {
    type: string;
    params: string[];
}