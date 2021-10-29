import React, {FC, memo} from "react";
import style from './Modal.module.scss'
import {InputModal} from "./ModalComponents/InputModal/InputModal";
import {DeleteModal} from "./ModalComponents/DeleteModal/DeleteModal";
import {ModalActions} from "./ModalContainer";
import {ModalType} from "../../app/app-types";

type ModalPropsType = {
    modal: ModalType
    modalActions: ModalActions
}

export const Modal: FC<ModalPropsType> = memo(props => {
    const {modal, modalActions} = props

    const setModal = () => {
        switch (props.modal.modalStatus) {
            case "add-person":
                return <InputModal
                    title={modal.modalTitle}
                    onClose={modalActions.closeModal}
                    actionCallback={modalActions.addPerson}
                />
            case "update-person":
                return <InputModal
                    title={modal.modalTitle}
                    onClose={modalActions.closeModal}
                    actionCallback={modalActions.updatePerson}
                />
            case "delete-person":
                return <DeleteModal
                    title={modal.modalTitle}
                    itemName={modal.itemName}
                    onClose={modalActions.closeModal}
                    deleteAction={modalActions.deletePerson}
                />
        }
    }

    if (!modal.isShow) return null

    return (
        <>
            <div className={style.background} onClick={modalActions.backGroundOnClick}/>
            <div className={style.modal}>
                {setModal()}
            </div>
        </>
    )
});