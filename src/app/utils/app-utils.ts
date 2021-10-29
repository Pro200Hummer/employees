import {MouseEvent} from "react";
import {ThunkAppDispatch} from "../store";
import {ItemNameType, ToastStatusType} from "../app-types";
import {setModalStatus, setToastStatus} from "../app-reducer";

export const changeModalStatus = (e: MouseEvent<HTMLElement>, dispatch: ThunkAppDispatch, itemId?: number, itemName?: ItemNameType) => {
    const trigger: string | undefined = e.currentTarget.dataset.button
    if (trigger === 'add-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Enter the person data'
        }))
    }
    if (trigger === 'update-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Enter the new person data',
            itemId
        }))
    }
    if (trigger === 'delete-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Do you want to delete',
            itemId,
            itemName
        }))
    }
};

export const showToastHandler = (toastStatus: ToastStatusType, toastMessage: string, dispatch: ThunkAppDispatch) => {
    dispatch(setToastStatus({isShow: true, toastStatus, toastMessage}))
    setTimeout(() => {
        dispatch(setToastStatus({isShow: false, toastStatus: 'no-status', toastMessage: ''}))
    }, 5000)
}