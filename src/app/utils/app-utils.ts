import {MouseEvent} from "react";
import {setModalStatus} from "../app-reducer";
import {ThunkAppDispatch} from "../store";

type ItemNameType = {
    firstName: string
    lastName: string
}

export const changeModalStatus = (e: MouseEvent<HTMLElement>, dispatch: ThunkAppDispatch, itemID?: number, itemName?: ItemNameType) => {
    const trigger: string | undefined = e.currentTarget.dataset.button
    if (trigger === 'add-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Enter the first and last name of the new new person'
        }))
    }
    if (trigger === 'update-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Enter the new first and last name of the person',
            itemId: itemID
        }))
    }
    if (trigger === 'delete-person') {
        dispatch(setModalStatus({
            isShow: true,
            modalStatus: trigger,
            modalTitle: 'Do you want to delete',
            itemId: itemID,
        }))
    }
}