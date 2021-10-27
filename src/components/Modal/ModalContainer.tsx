import React, {FC} from "react";
import {Modal} from "./Modal";
import {setModalStatus} from "../../app/app-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks/app-hooks";

export interface ModalActions {
    backGroundOnClick: () => void
    closeModal: () => void
}

export const ModalContainer: FC = () => {
    const modal = useAppSelector(state => state.app.modal);
    const dispatch = useAppDispatch();

    const modalActions: ModalActions = {
        backGroundOnClick: () => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        },
        closeModal: () => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }
    }

    return (
        <>
            {
                modal.modalStatus === 'no-status' ? <></> : <Modal modal={modal} modalActions={modalActions}/>
            }
        </>
    )
};