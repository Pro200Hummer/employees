import {MouseEvent} from "react";
import {ThunkAppDispatch} from "../store";
import {ItemNameType, ToastType} from "../app-types";
import {deleteToast, setModalStatus, setToast} from "../app-reducer";
import {useAppDispatch} from "../hooks/app-hooks";
import {v1} from "uuid";

export const useModal = () => {
    const dispatch: ThunkAppDispatch = useAppDispatch();

    return (e: MouseEvent<HTMLButtonElement | SVGElement |HTMLDivElement>, itemId?: number, itemName?: ItemNameType) => {
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
    }
};

interface UseToastReturn{
    setNewToast: (toastType:ToastType, toastMessage: string) => void,
    deleteToast: (id: string) => void
}
export const useToast = ():UseToastReturn => {
    const dispatch: ThunkAppDispatch = useAppDispatch();

    return {
        setNewToast: (toastType:ToastType, toastMessage: string) => {
            const toastId = v1()
            dispatch(setToast({id: toastId, toastType, toastTitle: 'Title', toastMessage}))
        },
        deleteToast: (id: string) => {
            dispatch(deleteToast(id))
        }
    }
};