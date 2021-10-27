import React, {FC} from "react";
import {Modal} from "./Modal";
import {setModalStatus} from "../../app/app-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks/app-hooks";
import {useAddPersonMutation, useDeletePersonMutation, useUpdatePersonMutation} from "../../api/persons-api";
import {AddPersonRequestType} from "../../api/types";

export interface ModalActions {
    addPerson: (params: AddPersonRequestType) => void
    updatePerson: (params: AddPersonRequestType) => void
    deletePerson: () => void
    backGroundOnClick: () => void
    closeModal: () => void
}

export const ModalContainer: FC = () => {

    const [addPerson, {}] = useAddPersonMutation();
    const [updatePerson, {}] = useUpdatePersonMutation();
    const [deletePerson, {}] = useDeletePersonMutation();
    const modal = useAppSelector(state => state.app.modal);
    const dispatch = useAppDispatch();

    const modalActions: ModalActions = {
        addPerson: async (params: AddPersonRequestType) => {
            await addPerson(params).unwrap
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        },
        updatePerson: async (params: AddPersonRequestType) => {
            if (modal.itemId) {
                await updatePerson({...params, id: modal.itemId}).unwrap
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        },
        deletePerson: async () => {
            if (modal.itemId) {
                deletePerson({id: modal.itemId})
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        },
        backGroundOnClick: () => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        },
        closeModal: () => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }
    }

    return <>{modal.modalStatus === 'no-status' ? <></> : <Modal modal={modal} modalActions={modalActions}/>}</>

};