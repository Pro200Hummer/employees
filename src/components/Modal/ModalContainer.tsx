import React, {FC, memo, useCallback} from "react";
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

export const ModalContainer: FC = memo(() => {

    const modal = useAppSelector(state => state.app.modal);
    const dispatch = useAppDispatch();

    const addPerson = useAddPersonMutation();
    const updatePerson = useUpdatePersonMutation();
    const deletePerson = useDeletePersonMutation();

    const modalActions: ModalActions = {
        addPerson: useCallback(async (params: AddPersonRequestType) => {
            await addPerson[0](params).unwrap()
                .then(() => {
                    if (addPerson[1].isSuccess) {
                        showToastHandler("succeed", 'New Person added successfully', dispatch)
                    }
                    dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
                })
        }, [dispatch, addPerson]),
        updatePerson: useCallback(async (params: AddPersonRequestType) => {
            if (modal.itemId) {
                await updatePerson[0]({...params, id: modal.itemId}).unwrap()
                    .then(() => {
                        if (updatePerson[1].isSuccess) {
                            showToastHandler("succeed", 'Person updated successfully', dispatch)
                        }
                    })
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        }, [dispatch, updatePerson, modal.itemId]),
        deletePerson: useCallback(async () => {
            if (modal.itemId) {
                await deletePerson[0]({id: modal.itemId}).unwrap()
                    .then(() => {
                        if (deletePerson[1].isSuccess) {
                            showToastHandler(
                                "succeed",
                                `Person ${modal.itemName?.firstName} deleted successfully`,
                                dispatch)
                        }
                    })
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        }, [dispatch, deletePerson, modal.itemId, modal.itemName?.firstName]),
        backGroundOnClick: useCallback(() => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }, [dispatch]),
        closeModal: useCallback(() => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }, [dispatch])
    }

    return <>{modal.modalStatus === 'no-status' ? <></> : <Modal modal={modal} modalActions={modalActions}/>}</>

});