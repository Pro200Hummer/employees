export type PersonType = {
    id: number
    firstName: string
    lastName: string
}
export type AddPersonRequestType = {
    firstName: string
    lastName: 'Yo'
}
export type DeletePersonRequestType = {
    id: number
}
export type UpdatePersonRequestType = {
    id: number
    firstName: string
    lastName: 'Wow'
}
