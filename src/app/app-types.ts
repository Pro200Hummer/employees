export type ModalStatusType = 'no-status' | 'add-person' | 'update-person' | 'delete-person';
export type ToastType = 'success' | 'error' | 'info'

export type ItemNameType = {
    firstName: string
    lastName: string
};

export type ModalType = {
    isShow: boolean
    modalStatus: ModalStatusType
    modalTitle: string
    itemId?: number
    itemName?: ItemNameType | null
};

export type ToastNotificationType = {
    id: string
    toastType: ToastType
    toastTitle: string
    toastMessage: string
}

export type AppInitialStateType = {
    modal: ModalType
    toast: ToastNotificationType[]
};