import React, {FC} from "react";
import {ModalType} from "../../app/app-reducer";
import style from './Modal.module.scss'
import {InputModal} from "./ModalComponents/InputModal/InputModal";
import {DeleteModal} from "./ModalComponents/DeleteModal/DeleteModal";
import {ModalActions} from "./ModalContainer";

type ModalPropsType = {
    modal: ModalType
    modalActions: ModalActions
}

export const Modal: FC<ModalPropsType> = props => {
    const {modal, modalActions} = props

    const setModal = () => {
        switch (props.modal.modalStatus){
            case "add-person":
                return <InputModal
                    title={modal.modalTitle}
                    onClose={modalActions.closeModal}
                />
            case "update-person":
                return <InputModal
                    title={modal.modalTitle}
                    onClose={modalActions.closeModal}
                />
            case "delete-person":
                return <DeleteModal/>
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
}