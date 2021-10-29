import React, {FC} from "react";
import {Modal} from "./Modal";
import {setModalStatus} from "../../app/app-reducer";
import {showToastHandler} from "../../app/utils/app-utils";
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

    const modal = useAppSelector(state => state.app.modal);
    const dispatch = useAppDispatch();

    const addPerson = useAddPersonMutation();
    const updatePerson = useUpdatePersonMutation();
    const deletePerson = useDeletePersonMutation();

    const modalActions: ModalActions = {
        addPerson: async (params: AddPersonRequestType) => {
            await addPerson[0](params).unwrap()
                .then(() => {
                    console.log(addPerson[1].isSuccess)
                    if (addPerson[1].isSuccess) {
                        showToastHandler("succeed", 'New Person added successfully', dispatch)
                    }
                    dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
                })
        },
        updatePerson: async (params: AddPersonRequestType) => {
            if (modal.itemId) {
                await updatePerson[0]({...params, id: modal.itemId}).unwrap()
                    .then(() => {
                        console.log(updatePerson[1].isSuccess)
                        if (updatePerson[1].isSuccess) {
                            showToastHandler("succeed", 'Person updated successfully', dispatch)
                        }
                    })
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        },
        deletePerson: async () => {
            if (modal.itemId) {
                await deletePerson[0]({id: modal.itemId}).unwrap()
                    .then(() => {
                        console.log(deletePerson[1].isSuccess)
                        if (deletePerson[1].isSuccess) {
                            showToastHandler(
                                "succeed",
                                `Person ${modal.itemName?.firstName} deleted successfully`,
                                dispatch)
                        }
                    })
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