import React, {FC, memo, useCallback} from "react";
import {Modal} from "./Modal";
import {setModalStatus} from "../../app/app-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks/app-hooks";
import {useAddPersonMutation, useDeletePersonMutation, useUpdatePersonMutation} from "../../api/persons-api";
import {AddPersonRequestType} from "../../api/types";
import {useToast} from "../../app/utils/app-utils";

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
    const {setNewToast} = useToast();

    const addPerson = useAddPersonMutation();
    const updatePerson = useUpdatePersonMutation();
    const deletePerson = useDeletePersonMutation();



    const modalActions: ModalActions = {
        addPerson: useCallback(async (params: AddPersonRequestType) => {
            await addPerson[0](params).unwrap()
                .then(() => {
                    if (addPerson[1].isSuccess) {
                        setNewToast('success', 'New Person added successfully')
                    }
                    dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
                })
        }, [dispatch, addPerson, setNewToast]),
        updatePerson: useCallback(async (params: AddPersonRequestType) => {
            if (modal.itemId) {
                await updatePerson[0]({...params, id: modal.itemId}).unwrap()
                    .then(() => {
                        if (updatePerson[1].isSuccess) {
                            setNewToast('success', 'Person updated successfully')
                        }
                    })
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        }, [dispatch, updatePerson, modal.itemId, setNewToast]),
        deletePerson: useCallback(async () => {
            if (modal.itemId) {
                await deletePerson[0]({id: modal.itemId}).unwrap()
                    .then(() => {
                        if (deletePerson[1].isSuccess) {
                            setNewToast(
                                'success',
                                `Person ${modal.itemName?.firstName} deleted successfully`
                            )
                        }
                    })
                dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
            }
        }, [dispatch, deletePerson, modal.itemId, modal.itemName?.firstName, setNewToast]),
        backGroundOnClick: useCallback(() => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }, [dispatch]),
        closeModal: useCallback(() => {
            dispatch(setModalStatus({isShow: false, modalStatus: 'no-status', modalTitle: '',}))
        }, [dispatch])
    }

    return <>{modal.modalStatus === 'no-status' ? <></> : <Modal modal={modal} modalActions={modalActions}/>}</>

});