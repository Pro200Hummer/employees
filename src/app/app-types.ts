export type ModalStatusType = 'no-status' | 'add-person' | 'update-person' | 'delete-person';
export type ToastStatusType = 'no-status' | 'succeed' | 'error' | 'info';

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

export type ToastType = {
    isShow: boolean
    toastStatus: ToastStatusType
    toastMessage: string
}

export type AppInitialStateType = {
    modal: ModalType
    toast: ToastType
};