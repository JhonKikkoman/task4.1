export interface aliasValue {
    dataValue?: string,
    passedValue?: string,
    id: string
}

export interface inputValue extends aliasValue {
    name?: string,
    value?: number,
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

export type sortType = {
    dataF: aliasValue,
}