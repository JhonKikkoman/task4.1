export interface aliasValue {
    dataValue?: string,
    passedValue?: string,
    id: string
}

export interface inputValue extends aliasValue {
    name?: string,
    value?: string,
    id: string
}

export type funcType = {
    propFunc: Function;
}

export type targetType = {
    target: {
        name?: string,
        value?: string
    }
}

export type propType = {
    prop: aliasValue[];
}

export interface arrayType { 
        id: string,
        dataValue?: string,
        passedValue?: string
}