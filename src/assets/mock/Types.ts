export interface Activity {
    id: string
    date: string // ISO datetime format
    type: codedValue
    description: string
}

export interface ChangeHistory {
    date: string // ISO datetime format
    type: string
    userId: number
    userFullName: string
    details: any // To be decided. Depends on type of change
}

export interface Case {
    id: number
    caseNumber: string
    assignedUser?: User
    dateOpened: string // ISO datetime format
    dateClose?: string // ISO datetime format
    caseType: codedValue
    description: string
    complainant: User
    respondant: License
    addtionalData?: additionalData
}

export interface User {
    id: number
    name: string | name
    title: string
    address: address
    phone: string
    email: string
}

export interface License {
    id: number
    type: string
    name: string | name
    address: address
}

export type codedValue = {
    label: string
    value: number
}

export type name = {
    namePrefix: string
    firstName: string
    middleName: string
    lastName: string
    nameSuffix: string
}

export type address = {
    line1: string
    line2: string
    city: string
    state: string
    zipcode: string
}

export type additionalData = {
    expectedDuration?: string // TBD
    priority?: string // TDB
    numberOfInvestigators?: number // TDB
}

export type Attachment = {
    id: number
    fileName: string
}
