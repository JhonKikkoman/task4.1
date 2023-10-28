export interface aliasValue {
    dataValue?: string,
    passedValue?: string,
    id: string
}

export interface aliasValue2 {
    dataValue?: string,
    passedValue?: number,
    id: string
}

export interface inputValue extends aliasValue {
    name?: string,
    value?: number,
    id: string
}

export type funcType = {
    propFunc: Function,
    propEdit?: aliasValue
}

export type targetType = {
    target: {
        name?: string,
        value?: string
    }
}
